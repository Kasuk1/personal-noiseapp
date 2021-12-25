//* IMPORT BASIC
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { Show } from './Show';

//* IMPORT SELECTORS
import { getUserShows, selectUserShows, selectUserShowsLoading } from '../../features/board/boardSlice';

//* IMPORT HELPERS
import { boardElementsLoading } from '../../helper/loading-state-jsx/boardElementsLoading';

export const CurrentUserShows = () => {
    const dispatch = useDispatch();
    const userShows = useSelector(selectUserShows);
    const userShowsLoading = useSelector(selectUserShowsLoading);

    useEffect(() => {
        dispatch(getUserShows());
    }, [dispatch]);

    if(userShowsLoading) return boardElementsLoading();

    return (
        <div className="board-container">
            {userShows.map(show => <Show key={show.id} show={show} />)}
        </div>
    );
};