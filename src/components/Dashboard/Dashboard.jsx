import React from 'react';

import Profile from '../Profile/Profile';

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