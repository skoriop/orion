import React from 'react';

function Login() {
    const clientID = '006d8bf0179d4861a7ccc8d121768c68';
    const redirectURI =  window.location.origin + window.location.pathname;
    const scopes = 'user-library-read user-read-recently-played user-top-read user-read-currently-playing user-follow-read playlist-read-private user-read-private user-read-email';
    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += `&client_id=${clientID}`;
    url += `&redirect_uri=${redirectURI}`;
    url += `&scope=${encodeURIComponent(scopes)}`;
    return (
        <button>
            <a href={url}>
                Login to Spotify
            </a>
        </button>
    );
}

export default Login;