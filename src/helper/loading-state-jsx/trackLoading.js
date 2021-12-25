export const trackLoading = () => {
    return (
        <div className="tracklist-loading__track">
            <div className="tracklist-loading__track-image"></div>
            <div className="tracklist-loading__track-info">
                <div className="tracklist-loading__track-name"></div>
                <div className="tracklist-loading__track-artist"></div>
            </div>
        </div>
    );
}