//* IMPORT BASIC
import React from 'react';
import { useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { Tracklist } from '../../components/Tracklist';
import { AlbumInfo } from '../../components/user-albums/AlbumInfo';

//* IMPORT SELECTORS
import { selectAlbum, selectAlbumLoading, selectArtistInfoLoading } from './albumDetailSlice';

//* IMPORT HELPERS
import { playlistDetailLoading } from '../../helper/loading-state-jsx/playlistDetailLoading';

export const AlbumDetail = () => {
    //* State selectors
    const album = useSelector(selectAlbum);

    //* Playlist and Userinfo loading selector
    const albumLoading = useSelector(selectAlbumLoading);
    const artistInfoLoading = useSelector(selectArtistInfoLoading);

    //* Handling playlist detail loading(pending) state
    if( albumLoading || artistInfoLoading ) return playlistDetailLoading();

    //* Return final playlist-detail
    return (
        <div className="playlist-detail" >
            <AlbumInfo />
            <Tracklist tracks={album.tracks.items} showRemove={false} />
        </div>
    );
};