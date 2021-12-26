//* IMPORT BASIC
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { Album } from '../../components/Album';
import { Artist } from '../../components/Artist';
import { Track } from '../../components/Track';

import { OptionsMenu } from '../../components/OptionsMenu';

//* IMPORT SELECTORS
import { searchItem, selectSearchResult, selectSearchResultLoading, selectSearchTerm, setSearchTerm } from './searchSlice';

//* IMPORT HELPERS
import { searchLoading } from '../../helper/loading-state-jsx/searchLoading';

//* IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//* IMPORT CUSTOM HOOKS
import { useRightClickMenu } from '../../hooks/useRightClickMenu';

export const Search = () => {
    const { x, y, showMenu, trackURI } = useRightClickMenu();
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
    const { artists, albums, tracks } = useSelector(selectSearchResult);
    const searchResultLoading = useSelector(selectSearchResultLoading)

    const handleSearchTerm = ({ target }) => {
        dispatch(setSearchTerm(target.value))
    }

    const renderResults = () => {
        const noResults = () => <h3 className="heading-3">No results, please try to insert a valid name.</h3>;

        if (searchResultLoading) return searchLoading();

        if (tracks || albums || artists) {
            return (
                <>
                    <h2 className="heading-2">Top result</h2>
                    <div className="search__top-result">
                        {artists.items.length > 0 ? <Artist artist={artists.items[0]} /> : noResults()}
                    </div>
                    <h2 className="heading-2">Songs</h2>
                    <div className="search__tracks">
                        {tracks.items.length > 0 ? tracks.items.map((track, index) => <Track key={track.id} track={track} index={index} />) : noResults()}
                    </div>
                    <h2 className="heading-2">Albums</h2>
                    <div className="search__albums">
                        {albums.items.length > 0 ? albums.items.map((album) => <Album key={album.id} album={album} />) : noResults()}
                    </div>
                    <h2 className="heading-2">Artists</h2>
                    <div className="search__artists">
                        {artists.items.length > 0 ? artists.items.map((artist) => <Artist key={artist.id} artist={artist} />) : noResults()}
                    </div>
                </>
            );
        } else {
            return;
        }
    }

    useEffect(() => {
        dispatch(searchItem(searchTerm));
    }, [dispatch, searchTerm]);


    //* Return final Search
    return (
        <div className="search-container">
            <div className="search__term">
                <FontAwesomeIcon className="search__term-icon" icon={faSearch} />
                <input className="search__term-input" type="text" value={searchTerm} onChange={handleSearchTerm} placeholder="Tracks, albums, or artists" />
            </div>
            {renderResults()}
            <OptionsMenu x={x} y={y} showMenu={showMenu} trackURI={trackURI} showRemove={false} />
        </div>
    );
};