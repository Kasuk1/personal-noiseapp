//* IMPORT BASIC
import * as React from 'react';
import { useSelector } from 'react-redux';

//* IMPORT SELECTORS
import { selectCurrentUserInfo } from '../../features/user/userSlice';


export const UserInfoDetail = () => {
    //* Destructuring current user info selector state
    const { display_name, images, followers, product, external_urls } = useSelector(selectCurrentUserInfo);

    //* Rendering final current-user-info
    return (
        <div className="user-info">
            <div className="user-info__image" style={{backgroundImage: `url(${images[0].url})` }}></div>
            <h1 className="user-info__name">{display_name}</h1>
            <p className="user-info__followers">{followers.total} followers</p>
            <p className={product === "premium" ? "user-info-product user-info-product__premium" : "user-info-product user-info-product__normal"}>{product}
                <a className="user-info__more" href={external_urls.spotify} target="_blank" rel="noreferrer">+</a>
            </p>
        </div>
    );
};