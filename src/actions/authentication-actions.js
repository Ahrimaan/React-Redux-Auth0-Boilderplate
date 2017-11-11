import authService from '../services/authenticationService';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const CURRENT_USER = 'CURRENT_USER';
export const SHOW_LOGIN = 'SHOW_LOGIN';
export const LOGOUT = 'LOGOUT';

export function showLogin() {
    return (dispatch) => {
        let request = new authService().login().then((result) => {
            dispatch(loggedIn(result));
        }, (error) => {
            console.log(error);
        });
    }
}

export function getCurrentUser() {
    let currentUserItem = localStorage.getItem('profile');
    let currentUser = currentUserItem ? JSON.parse(currentUserItem) : null;
    let action = {
        type: CURRENT_USER,
        payload: currentUser
    }
    return action;
}

export function loggedIn(profile) {
    return {
        type: LOGIN_SUCCESS,
        payload: profile
    };
}

export function logout(){
    let auth = new authService();
    auth.logout();
    return {
        type: LOGOUT
    }
}
