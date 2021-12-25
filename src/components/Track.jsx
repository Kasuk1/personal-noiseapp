//* IMPORT BASIC
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//* IMPORT SELECTORS/ACTIONS
import { getArtist, getArtistAlbums, getArtistRelatedArtists, getArtistTopTracks } from '../features/artistDetail/artistDetailSlice';
import { getAlbum, getArtistInfo } from '../features/albumDetail/albumDetailSlice';

export const Track = ({track, index, externalStyle}) => {
    const dispatch = useDispatch();

    //* Handle Artist Click
    const handleArtistDetail = (id) => {
        dispatch(getArtist(id));
        dispatch(getArtistTopTracks(id));
        dispatch(getArtistAlbums(id));
        dispatch(getArtistRelatedArtists(id));
    }

    //* Handle Click Track Name to Album
    const handleClickTrackAlbum = () => {
        dispatch(getAlbum(track.album.id));
        dispatch(getArtistInfo(track.album.artists[0].id));
    }

    //* Stablishing tracks artists and its click event
    const artists = track.artists.map(artist => {
                        return <Link key={artist.id} className="track__artist" to="/artist" onClick={() =>  handleArtistDetail(artist.id)}>
                            {artist.name}
                        </Link>
                    });

    //* Rendering final track
    return (
        <div key={track.id} id={track.uri} className={externalStyle ? externalStyle : "track"}>
            {index >= 0 && <p className="track__number">{index + 1 }</p>}
            <img className="track__image" src={track.album.images[0].url} alt={track.album.name} />
            <div className="u-width-animated">
                <Link className="track__name" to="/album" onClick={handleClickTrackAlbum}>{track.name}</Link>
                <p className="track__artists">{artists}</p>
            </div>
        </div>
    );
};