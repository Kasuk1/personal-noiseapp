//* IMPORT BASIC
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//* IMPORT REACT COMPONENTS
import { PlaylistInfo } from '../../components/user-playlists/PlaylistInfo';
import { Tracklist } from '../../components/Tracklist';

//* IMPORT SELECTORS
import { getPlaylist, selectPlaylist, selectPlaylistLoading } from './playlistDetailSlice';

//* IMPORT HELPERS
import { playlistDetailLoading } from '../../helper/loading-state-jsx/playlistDetailLoading';

export const PlaylistDetail = () => {
    //* State selectors
    const dispatch = useDispatch();
    const { playlistId } = useParams();
    const playlist = useSelector(selectPlaylist);

    //* PlaylistDetail loading selector
    const playlistLoading = useSelector(selectPlaylistLoading);

    useEffect(() => {
        dispatch(getPlaylist(playlistId));
    }, [dispatch, playlistId])

    //* Handling playlist detail loading(pending) state
    if (playlistLoading) return playlistDetailLoading();

    //* Rendering final playlist-detail
    return (
        <div className="playlist-detail">
            {Object.keys(playlist).length > 0 && (
                <>
                    <PlaylistInfo />
                    <Tracklist tracks={playlist.tracks.items} showRemove={true} />
                </>
            )}
        </div>
    );
};