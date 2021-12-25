import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getArtist, getArtistAlbums, getArtistRelatedArtists, getArtistTopTracks } from '../features/artistDetail/artistDetailSlice';

import { truncateArtistName } from '../helper/extra-functions/truncateTextHelper';

export const Artist = ({artist}) => {
    const dispatch = useDispatch();

    const handleArtistDetail = () => {
        dispatch(getArtist(artist.id));
        dispatch(getArtistTopTracks(artist.id));
        dispatch(getArtistAlbums(artist.id));
        dispatch(getArtistRelatedArtists(artist.id));
    }

    return (
        <Link className="artist" to="/artist" onClick={handleArtistDetail}>
            <div className="artist__image" style={artist.images.length > 0 ? {backgroundImage: `url(${artist.images[0].url})`} : {backgroundColor: "rgba(0, 0, 0, 0.35)"} }></div>
            <p className="artist__name">{truncateArtistName(artist.name)}</p>
            <span className="artist__type">{artist.type}</span>
        </Link>
    );
};