import React, {useEffect} from 'react';

import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';

function App() {

    useEffect(() => {
        const hash = window.location.hash;
        var t = window.localStorage.getItem('token');
        if (hash && !t)
        {
            // Access token has arrived!
            t = hash.substring(1).split('&').find(i => i.startsWith('access_token')).split('=')[1];
            window.localStorage.setItem('token', t);
            // Refresh
            window.location.reload();
        }
        if (hash) window.location.hash = '';
    }, []);

    if (window.localStorage.getItem('token') !== null) 
        return <Dashboard />;
    else 
        return <Login />;
}

export default App;