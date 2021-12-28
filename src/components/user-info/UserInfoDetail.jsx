//* IMPORT BASIC
import { useSelector } from 'react-redux';

//* IMPORT SELECTORS
import { selectCurrentUserInfo } from '../../features/user/userSlice';

import { truncateUserInfoName } from '../../helper/extra-functions/truncateTextHelper';

export const UserInfoDetail = () => {
    //* Destructuring current user info selector state
    const currentUserInfo = useSelector(selectCurrentUserInfo);
    const { display_name, images, followers, product, external_urls } = currentUserInfo;

    //* Rendering final current-user-info
    return (
        <div className="user-info">
            {
                Object.keys(currentUserInfo).length > 0 && (
                    <>
                        <div className="user-info__image"
                            style={{ backgroundImage: `url(${images.length > 0 ? images[0].url : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'})` }}>
                        </div>
                        <h1 className="user-info__name">{truncateUserInfoName(display_name)}</h1>
                        <p className="user-info__followers">{followers.total} followers</p>
                        <p className={product === "premium" ? "user-info-product user-info-product__premium" : "user-info-product user-info-product__normal"}>{product}
                            <a className="user-info__more" href={external_urls.spotify} target="_blank" rel="noreferrer">+</a>
                        </p>
                    </>
                )
            }
        </div>
    );
};