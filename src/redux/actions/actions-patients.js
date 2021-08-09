export const Types = {
    GET_PATIENTS_REQUEST: 'patients/get_patients_request',
    GET_PATIENTS_SUCCESS: 'patients/get_patients_success',
};

export const getPatientsRequest = () => ({
    type: Types.GET_PATIENTS_REQUEST
});

export const getPatientsSuccess = ({items}) => ({
    type: Types.GET_PATIENTS_SUCCESS,
    payload: {
        items
    }
});