//* IMPORT BASIC
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//* IMPORT SELECTORS
import { selectAlbum } from '../../features/albumDetail/albumDetailSlice';

export const AlbumInfo = () => {

    //* Current album state
    const { images: album_images, name: album_name, album_type, label, artist } = useSelector(selectAlbum);

    //* Artist info state
    const { images: artist_images, name: artist_name, id: artist_id } = artist;

    //* Displaying background image and animation big width
    const backgroundImage = album_images.length > 0 ? { backgroundImage: `url(${album_images[0].url})` } : { backgroundColor: `#383451` };

    //* Return final album-detail-info
    return (
        <div className="album-detail__info">
            <div className="album-detail__image" style={backgroundImage}></div>
            <p className="album-detail__type">{album_type}</p>
            <div className="album-detail-text">
                <h1 className="album-detail__name">{album_name}</h1>

                <p className="album-detail__label">{label}</p>

                <Link className="album-detail__artist" to={`/artists/${artist_id}`}>
                    <div className="album-detail__artist-image" style={{ backgroundImage: `url(${artist_images[0].url})` }}></div>
                    <p className="album-detail__artist-name">{artist_name}</p>
                </Link>
            </div>
        </div>
    );
};