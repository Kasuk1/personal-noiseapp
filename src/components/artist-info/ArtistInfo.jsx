//* IMPORT BASIC
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//* IMPORT SELECTORS
import { selectArtist } from '../../features/artistDetail/artistDetailSlice';

export const ArtistInfo = () => {
    //* Destructuring and declaring some style states
    const { name, type, followers, genres, images } = useSelector(selectArtist);
    const [styleArtistInfo, setStyleArtistInfo] = useState("artist-info");
    const [styleArtistArrow, setStyleArtistArrow] = useState("artist-info__arrow-down");

    //* Rendering bg image dianamically
    const backgroundImageStyle = () => {
        if (images.length > 0) {
            return { backgroundImage: `linear-gradient(32.83deg, rgba(0, 0, 0, 0.35) 36.35%, rgba(0, 0, 0, 0.126) 78.18%), url(${images[0].url})` };
        } else {
            return { backgroundColor: "rgba(0, 0, 0, 0.35)" }
        }
    };

    //* Toggle style states
    const toggleBackgroundStyle = () => {
        setStyleArtistInfo(() => styleArtistInfo === "artist-info" ? "artist-info active" : "artist-info");
        setStyleArtistArrow(() => styleArtistArrow === "artist-info__arrow-down" ? "artist-info__arrow-down active" : "artist-info__arrow-down");
    }

    //* Return final artist-info
    return (
        <div className={styleArtistInfo} style={backgroundImageStyle()}>
            <p className="artist-info__type">{type}</p>
            <h1 className="artist-info__name">
                {name}
                <span className="artist-info__followers">{followers.total} followers</span>
            </h1>
            <ul className="artist-info__genres">
                {genres.map(genre => <li key={genre} className="artist-info__genre">{genre}</li>)}
            </ul>
            <span className={styleArtistArrow} onClick={toggleBackgroundStyle}>&#10151;</span>
        </div>
    );
};