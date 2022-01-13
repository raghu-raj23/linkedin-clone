import { auth, provider,storage } from '../firebase';
import db from '../firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { SET_USER } from '../actions/actionTypes';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

export const signInAPI = () => {
    return dispatch => {
        signInWithPopup(auth, provider)
        .then(payload => {
            dispatch(setUser(payload.user));
        })
        .catch(error => {
            alert(error.message);
        })
    }
};

export const getUserAuth = () => {
    return dispatch => {
        onAuthStateChanged(auth, async user => {
            if(user) {
                dispatch(setUser(user));
            }
        })
    }
}

export const signOutAPI = () => {
    return dispatch => {
        signOut(auth)
        .then(() => {
            dispatch(setUser(null));
        })
        .catch(error => {
            console.log(error.message);
        })
    };
}

export const postArticleAPI = (payload) => {
    return dispatch => {
        if(payload.image !== ""){
            const upload = ref(storage, `images/${payload.image.name}`);
            
            uploadBytes(upload, payload.image).on('state_changed', 
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                if(snapshot.state === 'RUNNING'){
                    console.log('Progress is ' + progress + '% done');
                }
            }, 
            error => {console.log('error', error.code);},
            async() => {
                const downloadURL = await getDownloadURL(upload.snapshot.ref).then(downloadURL =>{
                    console.log('File available at: ', downloadURL);
                });
                db.collection('articles').add({
                    actor: {
                        description: payload.user.email,
                        title: payload.user.displayName,
                        date: payload.timestamp,
                        image: payload.user.photoURL
                    },
                    video: payload.video,
                    sharedImg: downloadURL,
                    comments: 0,
                    description: payload.description,
                });
            });
        }
    }
}