//* BASIC IMPORTS
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Spotify } from "../../util/SpotifyAPI";

//* Async Thunks
export const getAlbum = createAsyncThunk(
    "albumDetail/getAlbum",
    (albumID) => Spotify.getAlbum(albumID)
);

export const getArtistInfo = createAsyncThunk(
    "albumDetail/getArtistInfo",
    (artistID) => Spotify.getArtistInfo(artistID)
);

//* Slice Reducer
export const albumDetailSlice = createSlice({
    name: "albumDetail",
    initialState: {
        album: {},
        albumLoading: false,
        albumError: false,
        artistInfo: {},
        artistInfoLoading: false,
        artistInfoError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAlbum.pending, (state) => {
                state.albumLoading = true;
                state.albumError = false;
            })
            .addCase(getAlbum.fulfilled, (state, action) => {
                state.albumLoading = false;
                state.albumError = false;
                state.album = action.payload;
            })
            .addCase(getAlbum.rejected, (state) => {
                state.albumLoading = false;
                state.albumError = true;
            })
            .addCase(getArtistInfo.pending, (state) => {
                state.artistInfoLoading = true;
                state.artistInfoError = false;
            })
            .addCase(getArtistInfo.fulfilled, (state, action) => {
                state.artistInfoLoading = false;
                state.artistInfoError = false;
                state.artistInfo = action.payload;
            })
            .addCase(getArtistInfo.rejected, (state) => {
                state.artistInfoLoading = false;
                state.artistInfoError = true;
            })
    }
});



//* Selects
export const selectAlbum = (state) => state.albumDetail.album;
export const selectAlbumLoading = (state) => state.albumDetail.albumLoading;
export const selectAlbumError = (state) => state.albumDetail.albumError;

export const selectArtistInfo = (state) => state.albumDetail.artistInfo;
export const selectArtistInfoLoading = (state) => state.albumDetail.artistInfoLoading;
export const selectArtistInfoError = (state) => state.albumDetail.artistInfoError;

//* EXPORT DEFAULT
export default albumDetailSlice.reducer;