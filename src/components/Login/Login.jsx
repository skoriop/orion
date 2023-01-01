import React from 'react';
import {ReactComponent as SpotifyLogo} from '../../assets/icon.svg';
import {Button, SvgIcon, Grid, Typography} from '@mui/material';

import './Login.css'

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
        <div>
            <Grid margin="0px" height="100vh" position="absolute 0 0 0 0" container spacing={0} columns={16}>
                <Grid item xs>
                    
                </Grid>
                <Grid item xs={15}>
                    <br/>
                    <br/>
                    <Typography variant="h1" style={{"color":"#20c20e","font": "50px Courier New, monospace"}}>
                        O R I O N
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant="h1" style={{"color":"#666666","font": "25px Century Gothic, monospace"}}>
                        Discover new music on Spotify — supercharged
                    </Typography>
                    <br/>
                    <br/>
                    <Button href={url} size="large" variant="contained" style={{"background": "#333333"}} startIcon={<SvgIcon className="svg_icons"><SpotifyLogo /></SvgIcon>}>
                        
                        <p style={{font: "20px Monaco, monospace"}}>Login to Spotify</p>
                    </Button>
                </Grid>
            </Grid>
            {/* <footer style={{background:"red"}}><p>Made by skoriop</p></footer> */}
        </div>
    );
}

export default Login;