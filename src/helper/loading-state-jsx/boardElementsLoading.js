export const boardElementsLoading = () => {
    return (
        <div className="playlists-loading">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
                return (
                    <div key={num} className="playlists-loading__solo">
                        <div className="playlists-loading__solo-name"></div>
                        <div className="playlists-loading__solo-description"></div>
                    </div>
                );
            })}
        </div>
    );
}