import { trackLoading } from "./trackLoading";

export const playlistDetailLoading = () => {
    return (
        <div className="playlist-detail-loading">
            <div className="playlist-info-loading">
                <div className="playlist-info-loading__image"></div>
                <div className="playlist-info-loading__name"></div>
                <div className="playlist-info-loading__description-1"></div>
                <div className="playlist-info-loading__description-2"></div>
                <div className="playlist-info-loading__user-info">
                    <div className="playlist-info-loading__user-info-image"></div>
                    <div className="playlist-info-loading__user-info-name"></div>
                </div>
            </div>

            <div className="tracklist-loading">
                {[1,2,3,4,5,6,7,8].map(() => {
                    return trackLoading();
                })}
            </div>
        </div>
    );
}