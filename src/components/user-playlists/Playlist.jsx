//* IMPORT BASIC
import React from 'react';
import { Link } from 'react-router-dom';

export const Playlist = ({ playlist }) => {

    //* Displaying backgroundImage
    const setImage = () => {
        if (playlist.images.length > 0) {
            return { backgroundImage: `linear-gradient(32.83deg, rgba(0, 0, 0, 0.55) 36.35%, rgba(0, 0, 0, 0.126) 78.18%), url(${playlist.images[0].url})` }
        } else {
            return { backgroundColor: `#383451` }
        }
    };


    //* Rendering final playlist
    return (
        <Link className="board-item" style={setImage()} to={`/playlists/${playlist.id}`}>
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