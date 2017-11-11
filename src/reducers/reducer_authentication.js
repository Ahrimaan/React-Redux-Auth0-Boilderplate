import _ from 'lodash';
import { LOGIN_SUCCESS, CURRENT_USER, LOGOUT } from '../actions/authentication-actions';

export default function (state = null, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.payload;
        case CURRENT_USER:
            return action.payload;
        case LOGOUT:
            state = null;
        default:
            return state;
    }
}