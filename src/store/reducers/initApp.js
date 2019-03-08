import * as actionTypes from '../actions/actionTypes';

const initialState = {
    hooks: [],
    loading: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.INIT_APP_SUCCESS:
        return {
            ...state,
            loading: false,
            hooks: action.data,
        }
    case actionTypes.INIT_APP_FAIL:
        return {
            ...state,
            loading: false,
        }
    default: 
        return state;
    }
}

export default reducer;