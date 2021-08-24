import * as types from '../config/actionTypes'

const INITIAL_STATE = {
    items: []
};

export default function patients(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.GET_PATIENTS_SUCCESS:  {
            return {
                items: action.payload.items,
            }
        }
        default: {
            return state;
        }
    }
}
