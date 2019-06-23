import axios from 'axios';
import { REGISTRATION_URL }  from '../constants';


export function userSignupRequest(userData) {

    return dispatch => {
        return axios.post(REGISTRATION_URL, userData);
    }
}
