import { trackLoading } from "./trackLoading";

export const artistDetailLoading = () => {
    return (
        <div className="artist-detail-loading">
            <div className="artist-detail-loading__background">
                <div className="artist-detail-loading__background-type"></div>
                <div className="artist-detail-loading__background-name"></div>
                <div className="artist-detail-loading__background-genres">
                    {[1, 2, 3, 4, 5].map(num => <div key={num} className="artist-detail-loading__background-genre"></div>)}
                </div>
            </div>
            <div className="tracklist-loading">
                {[1, 2, 3, 4, 5].map(num => {
                    return trackLoading(num);
                })}
            </div>
        </div>
    );
}