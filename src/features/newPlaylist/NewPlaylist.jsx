//* IMPORT BASIC
import { useDispatch, useSelector } from 'react-redux';

//*¨IMPORT SELECTORS
import { createPlaylist, selectNewPlaylistDescription, selectNewPlaylistName, setNewPlaylistDescription, setNewPlaylistName } from './newPlaylistSlice';

export const NewPlaylist = () => {
    const dispatch = useDispatch();
    const newPlaylistName = useSelector(selectNewPlaylistName);
    const newPlaylistDescription = useSelector(selectNewPlaylistDescription);

    const handleName = (e) => {
        dispatch(setNewPlaylistName(e.target.value));
    }

    const handleDescription = (e) => {
        dispatch(setNewPlaylistDescription(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPlaylist({ name: newPlaylistName || "New Playlist", description: newPlaylistDescription || "Created in Noise by Igor" }));
        dispatch(setNewPlaylistName("New Playlist"));
        dispatch(setNewPlaylistDescription("Created in Noise by Igor"));
    }

    return (
        <form className="form-container" onSubmit={handleSubmit} >
            <div className="form-input form-input__image"></div>
            <input className="form-input form-input__name" type="text" value={newPlaylistName} onChange={handleName} placeholder="Playlist name" />
            <input className="form-input form-input__description" type="text" value={newPlaylistDescription} onChange={handleDescription} placeholder="Playlist description" />
            <button className="primary-button form-button mt-4" type="submit">Create</button>
        </form>
    );
};