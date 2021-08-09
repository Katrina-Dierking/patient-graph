import axios from 'axios';

export const getPatients = () => {
    return axios.get('/patients', {
        params: {
            limit: 1000
        }
    })
}