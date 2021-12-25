//* IMPORT BASIC
import React from 'react';


export const ArtistSmall = ({artist}) => {
    //* Handle artist reference onClick
    const handleRefArtist = () => {
        window.open(artist.href, "_blank");
    }

    //* Rendering final artist-small-component 
    return (
        <div className="top-artists__artist-small" onClick={handleRefArtist}>
            <div className="top-artists__artist-small-image" style={{backgroundImage: `url(${artist.image})`}}></div>
            <p className="top-artists__artist-small-name">{artist.name}</p>
        </div>
    );
};