//* BASIC IMPORTS
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Spotify } from "../../util/SpotifyAPI";

//* Async Thunks
export const getArtist = createAsyncThunk(
    "artistDetail/getArtist",
    (artistID) => Spotify.getArtist(artistID)
);

export const getArtistTopTracks = createAsyncThunk(
    "artistDetail/getArtistTopTracks",
    (artistID) => Spotify.getArtistTopTracks(artistID)
);

export const getArtistAlbums = createAsyncThunk(
    "artistDetail/getArtistAlbums",
    (artistID) => Spotify.getArtistAlbums(artistID)
);

export const getArtistRelatedArtists = createAsyncThunk(
    "artistDetail/getArtistRelatedArtists",
    (artistID) => Spotify.getArtistRelatedArtists(artistID)
);


//* Slice Reducers
export const artistDetailSlice = createSlice({
    name: "artistDetail",
    initialState: {
        artist: {},
        artistLoading: false,
        artistError: false,
        topTracks: [],
        topTracksLoading: false,
        topTracksError: false,
        albums: [],
        albumsLoading: false,
        albumsError: false,
        relatedArtists: [],
        relatedArtistsLoading: false,
        relatedArtistsError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArtist.pending, (state) => {
                state.artistLoading = true;
                state.artistError = false;
            })
            .addCase(getArtist.fulfilled, (state, action) => {
                state.artistLoading = false;
                state.artistError = false;
                /* console.log("This is the artist information: " ,action.payload); */
                state.artist = action.payload;
            })
            .addCase(getArtist.rejected, (state) => {
                state.artistLoading = false;
                state.artistError = true;
            })
            .addCase(getArtistTopTracks.pending, (state) => {
                state.topTracksLoading = true;
                state.topTracksError = false;
            })
            .addCase(getArtistTopTracks.fulfilled, (state, action) => {
                state.topTracksLoading = false;
                state.topTracksError = false;
                /* console.log("These are the top-tracks information: " ,action.payload.tracks); */
                state.topTracks = action.payload.tracks;
            })
            .addCase(getArtistTopTracks.rejected, (state) => {
                state.topTracksLoading = false;
                state.topTracksError = true;
            })
            .addCase(getArtistAlbums.pending, (state) => {
                state.albumsLoading = true;
                state.albumsError = false;
            })
            .addCase(getArtistAlbums.fulfilled, (state, action) => {
                state.albumsLoading = false;
                state.albumsError = false;
                /* console.log("These are the albums information: " ,action.payload.items); */
                state.albums = action.payload.items;
            })
            .addCase(getArtistAlbums.rejected, (state) => {
                state.albumsLoading = false;
                state.albumsError = true;
            })
            .addCase(getArtistRelatedArtists.pending, (state) => {
                state.relatedArtistsLoading = true;
                state.relatedArtistsError = false;
            })
            .addCase(getArtistRelatedArtists.fulfilled, (state, action) => {
                state.relatedArtistsLoading = false;
                state.relatedArtistsError = false;
                /* console.log("These are the related artists information: ", action.payload.artists); */
                state.relatedArtists = action.payload.artists;
            })
            .addCase(getArtistRelatedArtists.rejected, (state) => {
                state.relatedArtistsLoading = false;
                state.relatedArtistsError = true;
            })
    }
});

//* Selectors
export const selectArtist = (state) => state.artistDetail.artist;
export const selectArtistLoading = (state) => state.artistDetail.artistLoading;
export const selectArtistError = (state) => state.artistDetail.artistError;

export const selectArtistTopTracks = (state) => state.artistDetail.topTracks;
export const selectArtistTopTracksLoading = (state) => state.artistDetail.topTracksLoading;
export const selectArtistTopTracksError = (state) => state.artistDetail.topTracksError;

export const selectArtistAlbums = (state) => state.artistDetail.albums;
export const selectArtistAlbumsLoading = (state) => state.artistDetail.albumsLoading;
export const selectArtistAlbumsError = (state) => state.artistDetail.albumsError;

export const selectArtistRelatedArtists = (state) => state.artistDetail.relatedArtists;
export const selectArtistRelatedArtistsLoading = (state) => state.artistDetail.relatedArtistsLoading;
export const selectArtistRelatedArtistsError = (state) => state.artistDetail.relatedArtistsError;


//* EXPORT DEFAULT
export default artistDetailSlice.reducer;