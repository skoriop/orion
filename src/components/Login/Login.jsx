import React from 'react';

function Login() {
    const clientID = '006d8bf0179d4861a7ccc8d121768c68';
    const redirectURI =  window.location.origin + window.location.pathname;
    return (
        <button>
            <a href={'https://accounts.spotify.com/authorize?client_id='+clientID+'&redirect_uri='+redirectURI+'&response_type=token'}>
                Login to Spotify
            </a>
        </button>
    );
}

export default Login;