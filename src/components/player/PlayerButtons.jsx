//* IMPORT BASIC
import * as React from 'react';

//* IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPlay, faPause, faVolumeUp, /* faVolumeDown, faVolumeOff, faVolumeMute, */ faLaptop } from '@fortawesome/free-solid-svg-icons';

export const PlayerButtons = ({ isPlaying }) => {
    return (
        <>
            <div className="player__buttons-center">
                <FontAwesomeIcon className="player__icon" icon={faBackward} />
                {isPlaying ? <FontAwesomeIcon className="player__icon" icon={faPause} /> : <FontAwesomeIcon className="player__icon" icon={faPlay} />}
                <FontAwesomeIcon className="player__icon" icon={faForward} />
            </div>

            <div className="player__buttons-right">
                <FontAwesomeIcon className="player__icon" icon={faLaptop} />
                <FontAwesomeIcon className="player__icon" icon={faVolumeUp} />
            </div>
        </>
    );
};