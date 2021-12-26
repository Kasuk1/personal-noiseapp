//* IMPORT BASIC
import { useDispatch, useSelector } from 'react-redux';

//* IMPORT SELECTORS
import { selectCurrentUserInfo } from '../features/user/userSlice';
import { selectUserPlaylists } from '../features/board/boardSlice';
import { addItemsToPlaylist, removePlaylistItems } from '../features/newPlaylist/newPlaylistSlice';
import { selectPlaylist } from '../features/playlistDetail/playlistDetailSlice';


export const OptionsMenu = ({ x, y, showMenu, trackURI, showRemove }) => {
    const dispatch = useDispatch();
    const currentUserInfo = useSelector(selectCurrentUserInfo);
    const currentUserPlaylists = useSelector(selectUserPlaylists);
    const currentPlaylistDetail = useSelector(selectPlaylist);

    const handleAddItemToPlaylist = (playlistID) => {
        dispatch(addItemsToPlaylist({ playlistID, trackURI }));
    }

    const handleRemoveItemFromPlaylist = () => {
        dispatch(removePlaylistItems({ playlistID: currentPlaylistDetail.id, trackURI }));
    }

    const renderRemoveItemStyle = () => {
        if (currentPlaylistDetail.id && showRemove) {
            return currentPlaylistDetail.owner.id === currentUserInfo.id ? { display: "block" } : { display: "none" };
        }
        return;
    }

    return (
        <ul className="options-menu__list" style={{ top: y, left: x, display: `${showMenu ? "flex" : "none"}` }}>
            <h4 className="heading-4">Add to playlist</h4>
            {currentUserPlaylists.filter(playlist => playlist.owner.id === currentUserInfo.id)
                .map(playlist => <li key={playlist.id} className="options-menu__item p-text" onClick={() => handleAddItemToPlaylist(playlist.id)}>{playlist.name}</li>)}
            <h4 className="heading-4 options-menu__remove-item" onClick={() => handleRemoveItemFromPlaylist()} style={renderRemoveItemStyle()}>Remove from playlist</h4>
        </ul>
    );
};