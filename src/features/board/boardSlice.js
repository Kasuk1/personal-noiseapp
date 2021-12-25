//* BASIC IMPORTS
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Spotify } from "../../util/SpotifyAPI";

//* Async Thunks
export const getUserPlaylists = createAsyncThunk(
    "board/getUserPlaylists",
    Spotify.getUserPlaylists
);

export const getUserShows = createAsyncThunk(
    "board/getUserShows",
    Spotify.getUserShows
);

export const getUserAlbums = createAsyncThunk(
    "board/getUserAlbums",
    Spotify.getUserAlbums
);


//* Slice Reducers
export const boardSlice = createSlice({
    name: "board",
    initialState: {
        userPlaylists: [],
        userPlaylistsIsLoading: false,
        userPlaylistsError: false,
        userShows: [],
        userShowsLoading: false,
        userShowsError: false,
        userAlbums: [],
        userAlbumsLoading: false,
        userAlbumsError: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserPlaylists.pending, (state) => {
                state.userPlaylistsIsLoading = true;
                state.userPlaylistsError = false;
            })
            .addCase(getUserPlaylists.fulfilled, (state, action) => {
                state.userPlaylistsIsLoading = false;
                state.userPlaylistsError = false;
                console.log("These are the playlists: ",action.payload.items)
                state.userPlaylists = action.payload.items;
            })
            .addCase(getUserPlaylists.rejected, (state) => {
                state.userPlaylistsIsLoading = false;
                state.userPlaylistsError = true;
            })
            .addCase(getUserShows.pending, (state) => {
                state.userShowsLoading = true;
                state.userShowsError = false;
            })
            .addCase(getUserShows.fulfilled, (state, action) => {
                state.userShowsLoading = false;
                state.userShowsError = false;
                console.log("These are the shows: ",action.payload.items)
                state.userShows = action.payload.items.map(show => show.show);
            })
            .addCase(getUserShows.rejected, (state) => {
                state.userShowsLoading = false;
                state.userShowsError = true;
            })
            .addCase(getUserAlbums.pending, (state) => {
                state.userAlbumsLoading = true;
                state.userAlbumsError = false;
            })
            .addCase(getUserAlbums.fulfilled, (state, action) => {
                state.userAlbumsLoading = false;
                state.userAlbumsError = false;
                console.log("These are the albums: ",action.payload.items.map(album => album.album));
                state.userAlbums = action.payload.items.map(album => album.album);
            })
            .addCase(getUserAlbums.rejected, (state) => {
                state.userAlbumsLoading = false;
                state.userAlbumsError = true;
            })
    }
});


//* Selectors
export const selectUserPlaylists = (state) => state.board.userPlaylists;
export const selectUserPlaylistsLoading = (state) => state.board.userPlaylistsIsLoading;
export const selectUserPlaylistsError = (state) => state.board.userPlaylistsError;

export const selectUserShows = (state) => state.board.userShows;
export const selectUserShowsLoading = (state) => state.board.userShowsLoading;
export const selectUserShowsError = (state) => state.board.userShowsError;

export const selectUserAlbums = (state) => state.board.userAlbums;
export const selectUserAlbumsLoading = (state) => state.board.userAlbumsLoading;
export const selectUserAlbumsError = (state) => state.board.userAlbumsError;


//* EXPORT DEFAULT
export default boardSlice.reducer;

