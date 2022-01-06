import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
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