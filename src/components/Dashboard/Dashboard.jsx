import React from 'react';
import axios from 'axios';

import Profile from '../Profile/Profile';

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

function Dashboard() {

    const logout = () => {
        window.localStorage.removeItem("token");
        // Refresh
        window.location.reload();
    }

    return (
        <div>
            <Profile />
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Dashboard;