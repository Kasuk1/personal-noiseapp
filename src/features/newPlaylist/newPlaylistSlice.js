//* BASIC IMPORTS
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Spotify } from "../../util/SpotifyAPI";

//* Async Thunks
export const createPlaylist = createAsyncThunk(
    "newPlaylist/createPlaylist",
    ({name, description}) => Spotify.createPlaylist(name, description)
);

export const addItemsToPlaylist = createAsyncThunk(
    "newPlaylist/addItemsToPlaylist",
    ({playlistID, trackURI}) => Spotify.addItemsToPlaylist(playlistID, trackURI)
);

export const removePlaylistItems = createAsyncThunk(
    "newPlaylist/removePlaylistItems",
    ({playlistID, trackURI}) => Spotify.removePlaylistItems(playlistID, trackURI)
);


//* Slice Reducers
export const newPlaylistSlice = createSlice({
    name: "newPlaylist",
    initialState: {
        newPlaylist: {
            name: "" || "New Playlist",
            description: "" || "Created in Noise by Igor"
        },
        request: {
            type: "",
            successful: false,
        },
        createPlaylistLoading: false,
        createPlaylistError: false,
        addItemsToPlaylistLoading: false,
        addItemsToPlaylistError: false,
        removeItemsFromPlaylistLoading: false,
        removeItemsFromPlaylistError: false
    },
    reducers: {
        resetRequestPlaylist(state){
            state.request.successful = false;
            state.request.type = "";
        },
        setNewPlaylistName(state, action) {
            state.newPlaylist.name = action.payload;
        },
        setNewPlaylistDescription(state, action) {
            state.newPlaylist.description = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPlaylist.pending, (state) => {
                state.createPlaylistLoading = true;
                state.createPlaylistError = false;
            })
            .addCase(createPlaylist.fulfilled, (state, action) => {
                state.createPlaylistLoading = false;
                state.createPlaylistError = false;
                state.request.successful = true;
                state.request.type = "create";
                console.log("The playlist was created: ",action.payload);
            })
            .addCase(createPlaylist.rejected, (state) => {
                state.createPlaylistLoading = false;
                state.createPlaylistError = true;
            })
            .addCase(addItemsToPlaylist.pending, (state) => {
                state.addItemsToPlaylistLoading = true;
                state.addItemsToPlaylistError = false;
            })
            .addCase(addItemsToPlaylist.fulfilled, (state, action) => {
                state.addItemsToPlaylistLoading = false;
                state.addItemsToPlaylistError = false;
                state.request.successful = true;
                state.request.type = "add";
                console.log("The Item(s) was(were) added to the playlist: ",action.payload);
            })
            .addCase(addItemsToPlaylist.rejected, (state) => {
                state.addItemsToPlaylistLoading = false;
                state.addItemsToPlaylistError = true;
            })
            .addCase(removePlaylistItems.pending, (state) => {
                state.removeItemsFromPlaylistLoading = true;
                state.removeItemsFromPlaylistError = false;
            })
            .addCase(removePlaylistItems.fulfilled, (state, action) => {
                state.removeItemsFromPlaylistLoading = false;
                state.removeItemsFromPlaylistError = false;
                state.request.successful = true;
                state.request.type = "remove";
                console.log("The Item(s) was(were) removed from the playlist: ",action.payload);
            })
            .addCase(removePlaylistItems.rejected, (state) => {
                state.removeItemsFromPlaylistLoading = false;
                state.removeItemsFromPlaylistError = true;
                
            })
    }
});


//* Selectors
export const selectNewPlaylistName = (state) => state.newPlaylist.newPlaylist.name;
export const selectNewPlaylistDescription = (state) => state.newPlaylist.newPlaylist.description;

export const selectPlaylistRequest = (state) => state.newPlaylist.request;

export const selectCreatePlaylistLoading = (state) => state.newPlaylist.createPlaylistLoading;
export const selectCreatePlaylistError = (state) => state.newPlaylist.createPlaylistError;

export const selectAddItemsToPlaylistLoading = (state) => state.newPlaylist.addItemsToPlaylistLoading;
export const selectAddItemsToPlaylistError = (state) => state.newPlaylist.addItemsToPlaylistError;

export const selectRemoveItemsToPlaylistLoading = (state) => state.newPlaylist.removeItemsFromPlaylistLoading;
export const selectRemoveItemsToPlaylistError = (state) => state.newPlaylist.removeItemsFromPlaylistError;

export const {setNewPlaylistName, setNewPlaylistDescription, resetRequestPlaylist } = newPlaylistSlice.actions;

//* EXPORT DEFAULT
export default newPlaylistSlice.reducer;

