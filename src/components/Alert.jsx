//* IMPORT BASIC
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* IMPORT THUNK ACTIONS - SELECTORS
import { resetRequestPlaylist, selectPlaylistRequest } from '../features/newPlaylist/newPlaylistSlice';

//* IMPORT HELPERS
import { operationsRequestPlaylistSuccesful } from '../helper/loading-state-jsx/operationsRequestPlaylistSuccesful';

export const Alert = () => {
    const dispatch = useDispatch();

    //* Single action thunk fullfiled message
    const {type, successful} = useSelector(selectPlaylistRequest);

    //* Rendering Message Item added/removed to playlist
    const renderingAlertItem = () => {
        if(successful) {
            setTimeout(() => {
                dispatch(resetRequestPlaylist());
            }, 4000);
            return operationsRequestPlaylistSuccesful(type);
        }
    };

    return (
        <>
            {renderingAlertItem()}
        </>
    );
};