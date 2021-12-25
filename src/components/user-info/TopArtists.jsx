//* IMPORT BASIC
import * as React from 'react';
import { useSelector } from 'react-redux';

//* IMPORT REACT COMPONENT
import { ArtistSmall } from './ArtistSmall';

//* IMPORT SELECTORS
import { selectCurrentUserArtists } from '../../features/user/userSlice';

export const TopArtists = () => {
    //* Using selectors
    const artists = useSelector(selectCurrentUserArtists);

    //* Mapping through artists to get just 4 of them
    const topArtists = artists.map(artist => {
        return {
            name: artist.name, 
            image: artist.images[1].url,
            href: artist.external_urls.spotify
        }
    });

    //* Rendering final top-artists
    return (
        <div className="top-artists">
            {topArtists.map(artist => <ArtistSmall key={artist.name} artist={artist} />)}
        </div>
    );
};