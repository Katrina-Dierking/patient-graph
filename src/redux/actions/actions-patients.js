
import * as types from '../config/actionTypes'

export const getPatientsRequest = () => ({
    type: types.GET_PATIENTS_REQUEST
});

export const getPatientsSuccess = (items) => (
    {
 
    type: types.GET_PATIENTS_SUCCESS,
    payload: {
        items
    }
});

