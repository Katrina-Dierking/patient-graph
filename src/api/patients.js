import axios from 'axios';

axios.defaults.baseURL = 'https://my-patient-api.herokuapp.com'

export const getPatients = () => {
    return axios.get('/patients', {
        params: {
            limit: 1000
        }
    })
}