//* IMPORT BASIC
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//* IMPORT SLICES
import { getPlaylist, getUserInfo } from '../../features/playlistDetail/playlistDetailSlice';


export const Playlist = ({playlist}) => {
    const dispatch = useDispatch();

    //* Displaying backgroundImage
    const setImage = () => {
        if(playlist.images.length > 0) {
            return {backgroundImage: `linear-gradient(32.83deg, rgba(0, 0, 0, 0.55) 36.35%, rgba(0, 0, 0, 0.126) 78.18%), url(${playlist.images[0].url})`}
        } else {
            return {backgroundColor: `#383451`}
        }
    };

    //* Handling loadPlaylistItems
    const loadPlaylistDetail = () => {
        dispatch(getPlaylist(playlist.id));
        dispatch(getUserInfo(playlist.owner.id));
    };
    
    //* Rendering final playlist
    return (
        <Link className="board-item" style={setImage()} to="/playlist" onClick={loadPlaylistDetail}>
            <div className="board-item__text">
                <h1 className="board-item__text-name">{playlist.name}</h1>
                <p className="board-item__text-description">{
                    playlist.description ? playlist.description 
                                         : `By ${playlist.owner.display_name}`}
                </p>
            </div>
        </Link>
    );
};