import { auth, provider } from '../firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { SET_USER } from '../actions/actionTypes';

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