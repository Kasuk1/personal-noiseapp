//* BASIC IMPORTS
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Spotify } from "../../util/SpotifyAPI";

//* Async Thunks
export const searchItem = createAsyncThunk(
    "search/searchItem",
    (itemID) => Spotify.searchItem(itemID)
);


//* Slice Reducers
export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchTerm: "",
        searchResults: {},
        searchResultsLoading: false,
        searchResultsError: false
    },
    reducers: {
        setSearchTerm(state, action){
            state.searchTerm = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchItem.pending, (state) => {
                state.searchResultsLoading = true;
                state.searchResultsError = false;
            })
            .addCase(searchItem.fulfilled, (state, action) => {
                state.searchResultsLoading = false;
                state.searchResultsError = false;
                console.log("This is the search result: " ,action.payload);
                state.searchResults = action.payload;
            })
            .addCase(searchItem.rejected, (state) => {
                state.searchResultsLoading = false;
                state.searchResultsError = true;
            })
    }
});

//* Selectors
export const selectSearchTerm = (state) => state.search.searchTerm;
export const selectSearchResult = (state) => state.search.searchResults;
export const selectSearchResultLoading = (state) => state.search.searchResultsLoading;
export const selectSearchResultError = (state) => state.search.searchResultsError;

//* Reducers
export const setSearchTerm = searchSlice.actions.setSearchTerm;

//* EXPORT DEFAULT
export default searchSlice.reducer;