//* IMPORT BASIC
import { useSelector } from 'react-redux';

//* IMPORT SELECTORS
import { selectPlaylist } from '../../features/playlistDetail/playlistDetailSlice';


export const PlaylistInfo = () => {
    //* Current playlist state
    const { name, description, images, tracks, owner } = useSelector(selectPlaylist);

    //* User info state
    const { display_name: owner_name, images: owner_img, external_urls } = owner;

    //* Displaying background image and animation big width
    const backgroundImage = images.length > 0 ? { backgroundImage: `url(${images[0].url})` } : { backgroundColor: `#383451` };

    //* Handle reference to the spotify user's profile
    const handleRefUser = () => {
        window.open(external_urls.spotify, "_blank");
    }

    //* Rendering final playlist-detail
    return (
        <div className="playlist-detail__info">
            <div className="playlist-detail__image" style={backgroundImage}></div>
            <div className="playlist-detail__text">
                <div className="u-width-animated">
                    <h1 className="playlist-detail__name">{name}</h1>
                </div>

                <p className="playlist-detail__description">{description}</p>

                <div className="playlist-detail__owner">
                    <div className="playlist-detail__owner-image" style={{ backgroundImage: `url(${owner_img[0].url})` }}></div>
                    <p className="playlist-detail__owner-name" onClick={handleRefUser}>{owner_name}</p>

                    <p className="playlist-detail__total">{tracks.total} songs</p>
                </div>
            </div>

        </div>
    );
};