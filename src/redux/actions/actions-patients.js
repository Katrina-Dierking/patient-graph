// export const Types = {
//     GET_PATIENTS_REQUEST: 'patients/get_patients_request',
//     GET_PATIENTS_SUCCESS: 'patients/get_patients_success',
// };

import * as types from '../config/actionTypes'

export const getPatientsRequest = () => ({
    type: types.GET_PATIENTS_REQUEST
});

export const getPatientsSuccess = ({items}) => ({
    type: types.GET_PATIENTS_SUCCESS,
    payload: {
        items
    }
});