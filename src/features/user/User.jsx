//* IMPORT BASIC
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { UserInfo } from '../../components/user-info/UserInfo';

//* IMPORT SLICES
import {
  selectCurrentUserInfoIsLoading,
  selectCurrentUserArtistsLoading,
  getCurrentUserInfo,
  getCurrentUserTopArtists,
} from './userSlice';

export const User = () => {
  const dispatch = useDispatch();
  const userInfoLoading = useSelector(selectCurrentUserInfoIsLoading);
  const userArtistsLoading = useSelector(selectCurrentUserArtistsLoading);

  //* Dispatching initial information
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(getCurrentUserInfo());
      dispatch(getCurrentUserTopArtists());
    }
  }, [dispatch]);

  return (
    <div className='user-container'>
      {userInfoLoading || userArtistsLoading ? (
        <h1>...Loading User info</h1>
      ) : (
        <UserInfo />
      )}
    </div>
  );
};
