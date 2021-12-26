//* IMPORT BASIC
import React from 'react';
import { Link } from 'react-router-dom';

//* IMPORT HELPERS
import { truncatePlaylistDescription, truncatePlaylistName } from '../../helper/extra-functions/truncateTextHelper';

export const Show = ({ show }) => {

    //* Displaying backgroundImage
    const setImage = () => {
        if (show.images.length > 0) {
            return { backgroundImage: `linear-gradient(12.83deg, rgba(0, 0, 0, 0.55) 36.35%, rgba(0, 0, 0, 0.126) 78.18%), url(${show.images[0].url})` }
        } else {
            return { backgroundColor: `#383451` }
        }
    };

    //* Rendering final show
    return (
        <Link className="board-item" style={setImage()} to={`/shows/${show.id}`} >
            <div className="board-item__text">
                <h1 className="board-item__text-name">{truncatePlaylistName(show.name)}</h1>
                <p className="board-item__text-description">{`By ${truncatePlaylistDescription(show.publisher)}`}</p>
            </div>
        </Link>
    );
};