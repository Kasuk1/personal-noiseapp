//* IMPORT BASIC
import React from 'react';

//* IMPORT REACT COMPONENTS
import { TopArtists } from './TopArtists';
import { UserInfoDetail } from './UserInfoDetail';

export const UserInfo = () => {

    return (
        <div className="user-info-container">
            <UserInfoDetail />
            <TopArtists />
        </div>
    );
}
