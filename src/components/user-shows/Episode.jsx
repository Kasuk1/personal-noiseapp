import React from 'react';

export const Episode = ({episode}) => {
    return (
        <div className="episode">
            <div className="episode__image" style={{backgroundImage: `url(${episode.images[0].url})`}}></div>
            <div className="episode__info">
                <p className="episode__info-name">{episode.name}</p>
                <p className="episode__info-description">{episode.description}</p>
                <p className="episode__info-release-date">{episode.release_date}</p>
            </div>
        </div>
    );
};