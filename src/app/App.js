//* IMPORT BASIC
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { Board } from '../features/board/Board';
import { User } from '../features/user/User';
import { Alert } from '../components/Alert';

//* IMPORT SLICES
import { getCurrentUserInfo, getCurrentUserTopArtists } from '../features/user/userSlice';

//* IMPORT MAIN SCSS STYLESHEET
import "../sass/main.scss";

//* IMPORT UTILITIES
import { Spotify } from '../util/SpotifyAPI';

const App = () => {
    const dispatch = useDispatch();
    const [ accessToken, setAccessToken ] = useState("");

    const handleLogin = () => {
        if(!accessToken) Spotify.getAccessToken();
    }

    useEffect(() => {
        if(window.location.hash) {
            const stringAfterHashTag = window.location.hash.substring(1);
            const paramsInUrl = stringAfterHashTag.split("&");
            
            const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
                const [ key, value ] = currentValue.split("=");
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

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if(localStorage.getItem("token")) {
            setAccessToken(localStorage.getItem("token"));
        }
    }, []);

    //* Dispatching initial information
    useEffect(() => {
        if(localStorage.getItem("token")) {
            dispatch(getCurrentUserInfo());
            dispatch(getCurrentUserTopArtists());
        }
    }, [dispatch]);
    
    if(!accessToken) {
    return (
        <div className="container">
            <div className="user-container-login">
                <h1 className="user-container-login__logo">Noise</h1>
                <button className="primary-button" onClick={handleLogin}>Login</button>
                <p className="user-container-login__author">Developed by Igor</p>
            </div>
        </div>
    );
    }

    return (
        <div className="container">
            <User />
            <Board />
            <Alert />
        </div>
    );
}

export default App;
