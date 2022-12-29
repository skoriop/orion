import React from 'react';

function Dashboard() {
    
    const logout = () => {
        window.localStorage.removeItem("token");
        // Refresh
        window.location.reload();
    }

    return (
        <div>
            <p>Login successful!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Dashboard;