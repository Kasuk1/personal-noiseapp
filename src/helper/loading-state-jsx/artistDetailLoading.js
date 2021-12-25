import { trackLoading } from "./trackLoading";

export const artistDetailLoading = () => {
    return (
        <div className="artist-detail-loading">
            <div className="artist-detail-loading__background">
                <div className="artist-detail-loading__background-type"></div>
                <div className="artist-detail-loading__background-name"></div>
                <div className="artist-detail-loading__background-genres">
                    {[1,2,3,4,5].map(genre => <div className="artist-detail-loading__background-genre"></div>)}
                </div>
            </div>
            <div className="tracklist-loading">
                {[1,2,3,4,5].map(track => {
                    return trackLoading();
                })}
            </div>
        </div>
    );
}