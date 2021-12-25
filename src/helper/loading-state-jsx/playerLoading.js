//* IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPlay, faVolumeOff, faLaptop } from '@fortawesome/free-solid-svg-icons'

export const playerLoading = () => {
    return (
        <div className="player-loading">
            <div className="player-loading__track">
                <div className="player-loading__track-image"></div>
                <div className="player-loading__track-info">
                    <div className="player-loading__track-name"></div>
                    <div className="player-loading__track-artist"></div>
                </div>
            </div>
            
            <div className="player-loading__buttons-center">
                <FontAwesomeIcon icon={faBackward} />
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faForward} />
            </div>
            <div className="player-loading__buttons-right">
                <FontAwesomeIcon icon={faLaptop} />
                <FontAwesomeIcon icon={faVolumeOff} />
            </div>
        </div>
    );
}