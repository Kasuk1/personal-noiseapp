import { Link } from 'react-router-dom';

import { truncateArtistName } from '../helper/extra-functions/truncateTextHelper';

export const Artist = ({ artist }) => {
    return (
        <Link className="artist" to={`/artists/${artist.id}`}>
            <div className="artist__image" style={artist.images.length > 0 ? { backgroundImage: `url(${artist.images[0].url})` } : { backgroundColor: "rgba(0, 0, 0, 0.35)" }}></div>
            <p className="artist__name">{truncateArtistName(artist.name)}</p>
            <span className="artist__type">{artist.type}</span>
        </Link>
    );
};