import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initAppSuccess = hooks => {
    return {
        type: actionTypes.INIT_APP_SUCCESS,
        data: hooks,
    }
}

export const initAppFail = () => {
    return {
        type: actionTypes.INIT_APP_FAIL,
    }
}

export const initApp = () => {
    return dispatch => {
        axios.get('/hooks/read-hooks')
            .then(response => dispatch( initAppSuccess(response.data) ))
            .catch(error => dispatch( initAppFail() ));
    }
}