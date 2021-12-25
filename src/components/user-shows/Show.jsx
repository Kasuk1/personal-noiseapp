//* IMPORT BASIC
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//* IMPORT SELECTORS
import { getShow } from '../../features/showDetail/showDetailSlice';

//* IMPORT HELPERS
import { truncatePlaylistDescription, truncatePlaylistName } from '../../helper/extra-functions/truncateTextHelper';


export const Show = ({show}) => {
    const dispatch = useDispatch();

    //* Displaying backgroundImage
    const setImage = () => {
        if(show.images.length > 0) {
            return {backgroundImage: `linear-gradient(12.83deg, rgba(0, 0, 0, 0.55) 36.35%, rgba(0, 0, 0, 0.126) 78.18%), url(${show.images[0].url})`}
        } else {
            return {backgroundColor: `#383451`}
        }
    };

    //* Handling loadShowDetail
    const loadShowDetail = () => {
        dispatch(getShow(show.id));
    };

    //* Rendering final show
    return (
        <Link className="board-item" style={setImage()} to="/show" onClick={loadShowDetail} >
            <div className="board-item__text">
                <h1 className="board-item__text-name">{truncatePlaylistName(show.name)}</h1>
                <p className="board-item__text-description">{`By ${truncatePlaylistDescription(show.publisher)}`}</p>
            </div>
        </Link>
    );
};