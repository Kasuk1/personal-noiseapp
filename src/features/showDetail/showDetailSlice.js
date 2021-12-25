//* BASIC IMPORTS
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Spotify } from "../../util/SpotifyAPI";

//* Async Thunks
export const getShow = createAsyncThunk(
    "showDetail/getShow",
    (showID) => Spotify.getShow(showID)
);

//* Slice reducer
export const showDetailSlice = createSlice({
    name: "showDetail",
    initialState: {
        show: {},
        showLoading: false,
        showError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getShow.pending, (state) => {
                state.showLoading = true;
                state.showError = false;
            })
            .addCase(getShow.fulfilled, (state, action) => {
                state.showLoading = false;
                state.showError = false;
                console.log(action.payload)
                state.show = action.payload;
            })
            .addCase(getShow.rejected, (state) => {
                state.showLoading = false;
                state.showError = true;
            })
    }
});


//* Selects
export const selectShow = (state) => state.showDetail.show;
export const selectShowLoading = (state) => state.showDetail.showLoading;
export const selectShowError = (state) => state.showDetail.showError;


//* EXPORT DEFAULT
export default showDetailSlice.reducer;