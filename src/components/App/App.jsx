import React, {useEffect, useState} from 'react';

import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';

function App() {

    const [token, setToken] = useState("");
    useEffect(() => {
        const hash = window.location.hash;
        var t = window.localStorage.getItem('token');
        if (hash && !t)
        {
            // Access token has arrived!
            t = hash.substring(1).split('&').find(i => i.startsWith('access_token')).split('=')[1];
            window.location.hash = '';
            window.localStorage.setItem('token', t);
        }
        setToken(t);
    }, []);
    console.log(token);
    if (token === "")
    {
        return <Login />;
    }
    else
    {
        return <Dashboard />;
    }
}

export default App;