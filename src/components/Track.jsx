//* IMPORT BASIC
import { Link } from 'react-router-dom';

export const Track = ({ track, index, externalStyle }) => {

    //* Stablishing tracks artists and its click event
    const mappingArtists = track.artists.map(artist => {
        return <Link key={artist.id} className="track__artist" to={`/artists/${artist.id}`}>
            {artist.name}
        </Link>
    });

    //* Rendering final track
    return (
        <div key={track.id} id={track.uri} className={externalStyle ? externalStyle : "track"}>
            {index >= 0 && <p className="track__number">{index + 1}</p>}
            <img className="track__image" src={track.album.images[0].url} alt={track.album.name} />
            <div className="u-width-animated">
                <Link className="track__name" to={`/albums/${track.album.id}`}>{track.name}</Link>
                <p className="track__artists">{mappingArtists}</p>
            </div>
        </div>
    );
};