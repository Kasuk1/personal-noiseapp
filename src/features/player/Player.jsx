//* IMPORT BASIC
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { Track } from '../../components/Track';
import { PlayerButtons } from '../../components/player/PlayerButtons';

//* IMPORT REDUCERS
import { getCurrentPlayingTrack, selectCurrentPlayingTrack, selectCurrentPlayingTrackLoading } from './playerSlice';

//* IMPORT HELPER FUNCTIONS
import { playerLoading } from '../../helper/loading-state-jsx/playerLoading';

export const Player = () => {
    const dispatch = useDispatch();
    const {item, is_playing} = useSelector(selectCurrentPlayingTrack);
    const playingTrackLoading = useSelector(selectCurrentPlayingTrackLoading);
    
    useEffect(() => {
        dispatch(getCurrentPlayingTrack());
    }, [dispatch]);


    if(playingTrackLoading || !item) return playerLoading();

    return (
        <div className="player-container">
            <Track track={item} externalStyle={"track track-player"}/>
            <PlayerButtons isPlaying={is_playing} />
        </div>
    );
};