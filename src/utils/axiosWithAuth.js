import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://my-patient-api.herokuapp.com',
        headers: {
            Authorization: token
        }
    })
}