//* IMPORT BASIC
import { Link } from 'react-router-dom';


export const ArtistSmall = ({ artist }) => {

    //* Rendering final artist-small-component 
    return (
        <Link className="top-artists__artist-small" to={`/artists/${artist.id}`}>
            <div className="top-artists__artist-small-image" style={{ backgroundImage: `url(${artist.image})` }}></div>
            <p className="top-artists__artist-small-name">{artist.name}</p>
        </Link>
    );
};