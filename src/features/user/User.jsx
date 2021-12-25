//* IMPORT BASIC
import React from 'react';
import { useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { UserInfo } from '../../components/user-info/UserInfo';

//* IMPORT SLICES
import { selectCurrentUserInfoIsLoading, selectCurrentUserArtistsLoading } from './userSlice';

export const User = () => {
    const userInfoLoading = useSelector(selectCurrentUserInfoIsLoading);
    const userArtistsLoading = useSelector(selectCurrentUserArtistsLoading);
    
    if(userInfoLoading || userArtistsLoading ) {
        return (
            <div className="user-container">
                <h1>...Loading User info</h1>
            </div>
        );
    }

    return (
        <div className="user-container">
            <UserInfo  />
        </div>
    );
}