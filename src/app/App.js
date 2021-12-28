//* IMPORT BASIC
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//* IMPORT SLICES
import { getCurrentUserInfo, getCurrentUserTopArtists } from '../features/user/userSlice';
import { getUserPlaylists } from '../features/board/boardSlice';

//* IMPORT MAIN SCSS STYLESHEET
import "../sass/main.scss";

//* IMPORT UTILITIES
import { Spotify } from '../util/SpotifyAPI';
import { AppRouter } from '../routes/AppRouter';

const App = () => {
    const dispatch = useDispatch();
    const [accessToken, setAccessToken] = useState('');

    const handleLogin = () => {
        if (!accessToken) Spotify.getAccessToken();
    }

    useEffect(() => {
        if (window.location.hash) {
            const stringAfterHashTag = window.location.hash.substring(1);
            const paramsInUrl = stringAfterHashTag.split("&");

            const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
                const [key, value] = currentValue.split("=");
                accumulator[key] = value;
                return accumulator;
            }, {});

            const { access_token, expires_in, token_type } = paramsSplitUp;
            localStorage.clear();
            localStorage.setItem("token", access_token);
            localStorage.setItem("expiresIn", expires_in);
            localStorage.setItem("tokenType", token_type);

            window.history.pushState("Access Token", null, "/");
        }
    }, []);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            localStorage.clear();
        }, localStorage.getItem("expiresIn") * 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setAccessToken(localStorage.getItem("token"));
        }
    }, []);

    //* Dispatching initial information
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(getCurrentUserInfo());
            dispatch(getCurrentUserTopArtists());
            dispatch(getUserPlaylists());
        }
    }, [dispatch]);

    return (
        <div className="container">
            {
                accessToken
                    ?
                    <AppRouter />

                    :

                    <div className="user-container-login">
                        <h1 className="user-container-login__logo">Noise</h1>
                        <button className="primary-button" onClick={handleLogin}>Login</button>
                        <p className="user-container-login__author">Developed by Igor</p>
                    </div>
            }

        </div>
    );
}

export default App;
