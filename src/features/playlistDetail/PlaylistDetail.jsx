//* IMPORT BASIC
import React from 'react';
import { useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { PlaylistInfo } from '../../components/user-playlists/PlaylistInfo';
import { Tracklist } from '../../components/Tracklist';

//* IMPORT SELECTORS
import { selectPlaylist, selectPlaylistLoading, selectUserInfoLoading } from './playlistDetailSlice';

//* IMPORT HELPERS
import { playlistDetailLoading } from '../../helper/loading-state-jsx/playlistDetailLoading';

export const PlaylistDetail = () => {
    //* State selectors
    const playlist = useSelector(selectPlaylist);
    
    //* Playlist and Userinfo loading selector
    const playlistLoading = useSelector(selectPlaylistLoading);
    const userInfoLoading = useSelector(selectUserInfoLoading);

    //* Handling playlist detail loading(pending) state
    if( playlistLoading || userInfoLoading ) return playlistDetailLoading();

    //* Rendering final playlist-detail
    return (
        <div className="playlist-detail">
            <PlaylistInfo />
            <Tracklist tracks={playlist.tracks.items} showRemove={true} />
        </div>
    );
};