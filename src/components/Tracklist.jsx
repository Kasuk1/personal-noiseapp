//* IMPORT BASIC
import React from 'react';

//* IMPORT REACT COMPONENTS
import { Track } from './Track';
import { OptionsMenu } from './OptionsMenu';

//* IMPORT CUSTOM HOOKS
import { useRightClickMenu } from '../hooks/useRightClickMenu';

export const Tracklist = ({tracks, showRemove}) => {
    const { x, y, showMenu, trackURI } = useRightClickMenu();

    //* Rendering final track-list
    return (
        <div className="playlist-detail__tracklist">
            {tracks.map((track, index) => <Track key={track.id} track={track} index={index} />)}
            <OptionsMenu x={x} y={y} showMenu={showMenu} trackURI={trackURI} showRemove={showRemove} />
        </div>
    );
};