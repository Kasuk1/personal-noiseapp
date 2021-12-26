//* IMPORT BASIC
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//* IMPORT REACT COMPONENTS
import { Playlist } from './Playlist';

//* IMPORT SLICES
import { getUserPlaylists, selectUserPlaylists, selectUserPlaylistsLoading } from '../../features/board/boardSlice';

//* IMPORT LOADING STYLES
import { boardElementsLoading } from '../../helper/loading-state-jsx/boardElementsLoading';

export const CurrentUserPlaylists = () => {
    const dispatch = useDispatch();
    const userPlaylists = useSelector(selectUserPlaylists);
    const userPlaylistsLoading = useSelector(selectUserPlaylistsLoading);

    useEffect(() => {
        dispatch(getUserPlaylists());
    }, [dispatch]);

    if (userPlaylistsLoading) return boardElementsLoading();

    return (
        <div className="board-container">
            <Link className="add-playlist-button" to="/new-playlist">+</Link>
            {userPlaylists.map(playlist => <Playlist key={playlist.id} playlist={playlist} />)}
        </div>
    );
};