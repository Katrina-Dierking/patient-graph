import * as types from '../config/actionTypes'

const INITIAL_STATE = {
    loading:false,
    days: []
};

export default function getDays (state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.GET_DAYS_REQUEST:
            return {
                ...state, 
                loading: true
            };
        case types.GET_DAYS_SUCCESS: {
            return {
                ...state, 
                days: action.payload,
                loading: false
            }
        }
        default: {
            return state; 
        }
    }
}