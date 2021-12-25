import React from 'react';
import { useSelector } from 'react-redux';

import { Artist } from '../Artist';

import { selectArtistRelatedArtists } from '../../features/artistDetail/artistDetailSlice';


export const ArtistRelatedArtists = () => {
    const relatedArtists = useSelector(selectArtistRelatedArtists);

    return (
        <div className="artist-related-artists">
            {relatedArtists.map(artist => <Artist artist={artist} />)}
        </div>
    );
};