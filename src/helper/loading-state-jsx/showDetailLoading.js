export const showDetailLoading = () => {
    return (
        <div className="show-loading">
            <div className="show-loading__detail">
                <div className="show-loading__detail-image"></div>
                <div className="show-loading__detail-info">
                    <div className="show-loading__detail-info-type"></div>
                    <div className="show-loading__detail-info-name"></div>
                    <div className="show-loading__detail-info-publisher"></div>
                    <div className="show-loading__detail-info-description"></div>
                </div>
                
            </div>
            <div className="show-loading__episode">
                <div className="show-loading__episode-image"></div>
                <div className="show-loading__episode-info">
                    <div className="show-loading__episode-info-name"></div>
                    <div className="show-loading__episode-info-description"></div>
                    <div className="show-loading__episode-info-release-date"></div>
                </div>
            </div>
        </div>
    );
};