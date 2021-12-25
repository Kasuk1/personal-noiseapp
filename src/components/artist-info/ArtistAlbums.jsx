// @flow 
import React from 'react';
import { useSelector } from 'react-redux';

import { Album } from '../Album';

import { selectArtistAlbums } from '../../features/artistDetail/artistDetailSlice';

export const ArtistAlbums = () => {
    const artistAlbums = useSelector(selectArtistAlbums);

    return (
        <div className="artist-albums">
            {artistAlbums.map(album => <Album album={album} />)}
        </div>
    );
};