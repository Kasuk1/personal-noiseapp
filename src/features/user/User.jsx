//* IMPORT BASIC
import { useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { UserInfo } from '../../components/user-info/UserInfo';

//* IMPORT SLICES
import { selectCurrentUserInfoIsLoading, selectCurrentUserArtistsLoading } from './userSlice';

export const User = () => {
    const userInfoLoading = useSelector(selectCurrentUserInfoIsLoading);
    const userArtistsLoading = useSelector(selectCurrentUserArtistsLoading);

    return (
        <div className="user-container">
            {userInfoLoading || userArtistsLoading ? (
                <h1>...Loading User info</h1>
            ) : (
                <UserInfo />
            )}
        </div>
    );
}