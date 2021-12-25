//* BASIC IMPORTS
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Spotify } from "../../util/SpotifyAPI";

//* Async Thunks
export const getPlaylist = createAsyncThunk(
    "playlistDetail/getPlaylist",
    (playlistID) => Spotify.getPlaylist(playlistID)
);

export const getUserInfo = createAsyncThunk(
    "playlistDetail/getUserInfo",
    (userID) => Spotify.getUserInfoByID(userID)
);

//* Slice Reducer
export const playlistDetailSlice = createSlice({
    name: "playlistDetail",
    initialState: {
        playlist: {},
        playlistLoading: false,
        playlistError: false,
        userInfo: {},
        userInfoLoading: false,
        userInfoError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPlaylist.pending, (state) => {
                state.playlistLoading = true;
                state.playlistError = false;
            })
            .addCase(getPlaylist.fulfilled, (state, action) => {
                state.playlistLoading = false;
                state.playlistError = false;
                state.playlist = action.payload;
            })
            .addCase(getPlaylist.rejected, (state) => {
                state.playlistLoading = false;
                state.playlistError = true;
            })
            .addCase(getUserInfo.pending, (state) => {
                state.userInfoLoading = true;
                state.userInfoError = false;
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.userInfoLoading = false;
                state.userInfoError = false;
                state.userInfo = action.payload;
            })
            .addCase(getUserInfo.rejected, (state) => {
                state.userInfoLoading = false;
                state.userInfoError = true;
            })
    }
});



//* Selects
export const selectPlaylist = (state) => state.playlistDetail.playlist;
export const selectPlaylistLoading = (state) => state.playlistDetail.playlistLoading;
export const selectPlaylistError = (state) => state.playlistDetail.playlistError;

export const selectUserInfo = (state) => state.playlistDetail.userInfo;
export const selectUserInfoLoading = (state) => state.playlistDetail.userInfoLoading;
export const selectUserInfoError = (state) => state.playlistDetail.userInfoError;

//* EXPORT DEFAULT
export default playlistDetailSlice.reducer;
