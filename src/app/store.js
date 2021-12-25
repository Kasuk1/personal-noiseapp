//* IMPORT BASIC
import { configureStore } from '@reduxjs/toolkit';

//* IMPORT DEFAULT SLICES
import userSlice from '../features/user/userSlice';
import boardSlice from '../features/board/boardSlice';
import playlistDetailSlice from '../features/playlistDetail/playlistDetailSlice';
import showDetailSlice from '../features/showDetail/showDetailSlice';
import albumDetailSlice from '../features/albumDetail/albumDetailSlice';
import artistDetailSlice from '../features/artistDetail/artistDetailSlice';
import playerSlice from '../features/player/playerSlice';
import searchSlice from '../features/search/searchSlice';
import newPlaylistSlice from '../features/newPlaylist/newPlaylistSlice';

//* CONFIGURE STORE
export const store = configureStore({
    reducer: {
        user: userSlice,
        board: boardSlice,
        playlistDetail: playlistDetailSlice,
        showDetail: showDetailSlice,
        albumDetail: albumDetailSlice,
        artistDetail: artistDetailSlice,
        player: playerSlice,
        search: searchSlice,
        newPlaylist: newPlaylistSlice
    },
});
