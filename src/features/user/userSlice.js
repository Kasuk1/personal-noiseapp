//* IMPORT BASIC
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Spotify } from "../../util/SpotifyAPI";

//* Async Thunks
export const getCurrentUserInfo = createAsyncThunk(
    "user/getUserInfo",
    Spotify.getCurrentUserInfo
);

export const getCurrentUserTopArtists = createAsyncThunk(
    "user/getUserArtists",
    Spotify.getUserTopArtists
);

//* Slice Reducers
const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {},
        userArtists: [],
        isUserInfoLoading: false,
        errorGetUserInfo: false,
        isArtistsLoading: false,
        errorGetArtists: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCurrentUserInfo.pending, (state) => {                 //* Get User Basic Info--------------|
                state.isUserInfoLoading = true;
                state.errorGetUserInfo = false;
            })
            .addCase(getCurrentUserInfo.fulfilled, (state, action) => {
                state.isUserInfoLoading = false;
                state.errorGetUserInfo = false;
                state.userInfo = {...action.payload};
            })
            .addCase(getCurrentUserInfo.rejected, (state) => {
                state.isUserInfoLoading = false;
                state.errorGetUserInfo = true;
            })
            .addCase(getCurrentUserTopArtists.pending, (state) => {                 //* Get User's Top Artists---------------|
                state.isArtistsLoading = true;
                state.errorGetArtists = false;
            })
            .addCase(getCurrentUserTopArtists.fulfilled, (state, action) => {
                state.isArtistsLoading = false;
                state.errorGetArtists = false;
                state.userArtists = action.payload.items;
            })
            .addCase(getCurrentUserTopArtists.rejected, (state) => {
                state.isArtistsLoading = false;
                state.errorGetArtists = true;
            })
            
    }
});

//* Selects
export const selectCurrentUserInfo = (state) => state.user.userInfo;
export const selectCurrentUserInfoIsLoading = (state) => state.user.isUserInfoLoading;
export const selectCurrentErrorGetUserInfo = (state) => state.user.errorGetUserInfo;

export const selectCurrentUserArtists = (state) => state.user.userArtists;
export const selectCurrentUserArtistsLoading = (state) => state.user.isArtistsLoading;
export const selectCurrentErrorGetArtists = (state) => state.user.errorGetArtists;

//* EXPORT DEFAULT
export default userSlice.reducer;