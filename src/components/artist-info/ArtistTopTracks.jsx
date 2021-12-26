//* IMPORT BASIC
import React from 'react';
import { useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { OptionsMenu } from '../OptionsMenu';
import { Track } from '../Track';

//* IMPORT SELECTORS
import { selectArtistTopTracks } from '../../features/artistDetail/artistDetailSlice';

//* IMPORT CUSTOM HOOKS
import { useRightClickMenu } from '../../hooks/useRightClickMenu';

export const ArtistTopTracks = () => {
    const { x, y, showMenu, trackURI } = useRightClickMenu();
    const artistTopTracks = useSelector(selectArtistTopTracks);

    return (
        <div className="artist-top-tracks">
            {artistTopTracks.map((track, index) => <Track key={track.id} track={track} index={index} />)}
            <OptionsMenu x={x} y={y} showMenu={showMenu} trackURI={trackURI} showRemove={false} />
        </div>
    );
};