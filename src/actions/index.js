import { auth, provider,storage } from '../firebase';
import db from '../firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from '../actions/actionTypes';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, query, orderBy, onSnapshot, getDocs } from "firebase/firestore";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
});

export const setLoading = (status) => ({
    type: SET_LOADING_STATUS,
    status: status,
});

export const getArticles = (payload) => ({
    type: GET_ARTICLES,
    payload: payload,
});

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

export function postArticleAPI(payload) {
    return (dispatch) => {
        dispatch(setLoading(true));

        if(payload.image !== ""){
            const storageRef = ref(storage, `images/${payload.image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, payload.image);
            
            uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                if(snapshot.state === 'running'){
                    console.log('Progress is ' + progress + '% done');
                }
            },
            (error) => {console.log('error', error.code);},
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then(
                    async (downloadURL) => {
                    console.log('File available at', downloadURL);                    
                    const docRef = await addDoc(collection(db, "articles"), {
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
                    dispatch(setLoading(false));
                    // console.log("doc written with id: ",docRef.id);
                    }
                );
                }
            )
        }
        else if(payload.video !== ""){
            const docRef = addDoc(collection(db, "articles"), {
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL
                },
                video: payload.video,
                sharedImg: "",
                comments: 0,
                description: payload.description,
            });
            console.log("doc written with id: ",docRef.id);
        }
    }
}

export const getArticlesAPI = () => {
    return (dispatch) => {
        let payload;
        onSnapshot(
            query(
                collection(db, "articles"),
                orderBy("actor.date", "desc")
            ),
                (snapshot) => {                    
                    payload = snapshot.docs.map((doc) => doc.data());
                    // console.log(payload);
                    dispatch(getArticles(payload));
            }
        );
    }
}