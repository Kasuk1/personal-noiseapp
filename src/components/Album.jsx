//* IMPORT BASIC
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//* IMPORT SELECTORS
import { getAlbum, getArtistInfo } from '../features/albumDetail/albumDetailSlice';

//* IMPORT HELPERS
import { truncatePlaylistDescription, truncatePlaylistName } from '../helper/extra-functions/truncateTextHelper';


export const Album = ({album}) => {
    const dispatch = useDispatch();

    //* Displaying backgroundImage
    const setImage = () => {
        if(album.images.length > 0) {
            return {backgroundImage: `linear-gradient(32.83deg, rgba(0, 0, 0, 0.55) 36.35%, rgba(0, 0, 0, 0.126) 78.18%), url(${album.images[0].url})`}
        } else {
            return {backgroundColor: `#383451`}
        }
    };

     //* Handling loadAlbumDetail
     const loadAlbumDetail = () => {
        dispatch(getAlbum(album.id));
        dispatch(getArtistInfo(album.artists[0].id));
    };
    
    //* Return final Album
    return (
        <Link className="board-item" style={setImage()} to="/album" onClick={loadAlbumDetail}>
            <div className="board-item__text">
                <h1 className="board-item__text-name">{truncatePlaylistName(album.name)}</h1>
                <p className="board-item__text-description">By {truncatePlaylistDescription(album.artists.map(artist => artist.name)).join(", ")}
                </p>
            </div>
        </Link>
    );
};