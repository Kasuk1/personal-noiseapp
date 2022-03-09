//* IMPORT BASIC
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* IMPORT SLICES
import { selectToken, setAccessToken } from '../features/user/userSlice';

//* IMPORT MAIN SCSS STYLESHEET
import '../sass/main.scss';

//* IMPORT UTILITIES
import { Spotify } from '../util/SpotifyAPI';
import { AppRouter } from '../routes/AppRouter';

const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);
  const localToken = window.localStorage.getItem('token');

  const handleLogin = () => {
    Spotify.getAccessToken();
  };

  useEffect(() => {
    if (localToken) {
      dispatch(setAccessToken(localToken));
    }
  }, [dispatch, localToken]);

  useEffect(() => {
    if (window.location.hash) {
      const stringAfterHashTag = window.location.hash.substring(1);
      const paramsInUrl = stringAfterHashTag.split('&');

      const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
        const [key, value] = currentValue.split('=');
        accumulator[key] = value;
        return accumulator;
      }, {});

      const { access_token, expires_in, token_type } = paramsSplitUp;
      window.localStorage.clear();
      window.localStorage.setItem('token', access_token);
      window.localStorage.setItem('expiresIn', expires_in);
      window.localStorage.setItem('tokenType', token_type);

      window.location = '/';
    }
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.localStorage.clear();
    }, window.localStorage.getItem('expiresIn') * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='container'>
      {accessToken ? (
        <AppRouter />
      ) : (
        <div className='user-container-login'>
          <h1 className='user-container-login__logo'>Noise</h1>
          <button className='primary-button' onClick={handleLogin}>
            Login
          </button>
          <p className='user-container-login__author'>Developed by Igor</p>
        </div>
      )}
    </div>
  );
};

export default App;
