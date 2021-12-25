//* IMPORT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export const operationsRequestPlaylistSuccesful = (type) => {
    let icon;
    let message;
    
    switch (type) {
        case "create":
            icon = faPlusCircle;
            message = "Playlist created";
            break;
        case "add":
            icon = faCheckCircle;
            message = "Added to playlist";
            break;
        case "remove":
            icon = faMinusCircle;
            message = "Removed from playlist";
            break;
        default:
            break;
    }

    return (
        <div className="adding-items-loading">
            <FontAwesomeIcon className="adding-items-loading__icon" icon={icon} />
            <p className="adding-items-loading__text">{message}</p>
        </div>
    );
}