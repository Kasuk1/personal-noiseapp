//* IMPORT BASIC
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { Album } from '../Album';

//* IMPORT SELECTORS
import { getUserAlbums, selectUserAlbums, selectUserAlbumsLoading } from '../../features/board/boardSlice';

//* IMPORT HELPERS
import { boardElementsLoading } from '../../helper/loading-state-jsx/boardElementsLoading';


export const CurrentUserAlbums = () => {
    //* Referencing state selectors
    const dispatch = useDispatch();
    const userAlbums = useSelector(selectUserAlbums);
    const userAlbumsLoading = useSelector(selectUserAlbumsLoading);

    //* Dispatching getUserAlbums
    useEffect(() => {
        dispatch(getUserAlbums());
    }, [dispatch]);

    //* Render loading
    if(userAlbumsLoading) return boardElementsLoading();

    //* Return final current-user-album
    return (
        <div className="board-container">
            {userAlbums.map(album => <Album key={album.id} album={album} />)}
        </div>
    );
};