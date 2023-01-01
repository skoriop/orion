import axios from 'axios';

export var callAPI = async (type, params) => {
    const token = window.localStorage.getItem('token');
    const baseURL = 'https://api.spotify.com/v1/';
    const url = baseURL + params;
    return axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
    .then(res => res.data)
    .catch(err => console.error(err));
};