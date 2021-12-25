//* BASIC IMPORTS
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Spotify } from "../../util/SpotifyAPI";

//* Async Thunks
export const getCurrentPlayingTrack = createAsyncThunk(
    "player/getCurrentPlayingTrack",
    Spotify.getCurrentPlayingTrack
);


//* Slice Reducers
export const playerSlice = createSlice({
    name: "player",
    initialState: {
        playingTrack: {},
        playingTrackLoading: false,
        playingTrackError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCurrentPlayingTrack.pending, (state) => {
                state.playingTrackLoading = true;
                state.playingTrackError = false;
            })
            .addCase(getCurrentPlayingTrack.fulfilled, (state, action) => {
                state.playingTrackLoading = false;
                state.playingTrackError = false;
                console.table("This is the current track playing: " , action.payload);
                state.playingTrack = action.payload;
            })
            .addCase(getCurrentPlayingTrack.rejected, (state) => {
                state.playingTrackLoading = false;
                state.playingTrackError = true;
            })
    }
});

//* Selectors
export const selectCurrentPlayingTrack = (state) => state.player.playingTrack;
export const selectCurrentPlayingTrackLoading = (state) => state.player.playingTrackLoading;
export const selectCurrentPlayingTrackError = (state) => state.player.playingTrackError;


//* EXPORT DEFAULT
export default playerSlice.reducer;