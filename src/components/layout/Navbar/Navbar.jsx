import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faMicrophoneAlt, faCompactDisc, faSearch, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {

    const isMediumOrLess = useMediaQuery({
        query: '(max-width: 56.25em)'
    });

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list__item">
                    <Link to="/playlists">
                        {isMediumOrLess ? <FontAwesomeIcon className="nav-list__icon" icon={faList} /> : 'Playlists'}
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link to="/shows">
                        {isMediumOrLess ? <FontAwesomeIcon className="nav-list__icon" icon={faMicrophoneAlt} /> : 'Podcasts'}
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link to="/albums">
                        {isMediumOrLess ? <FontAwesomeIcon className="nav-list__icon" icon={faCompactDisc} /> : 'Albums'}
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link to="/search">
                        {isMediumOrLess ? <FontAwesomeIcon className="nav-list__icon" icon={faSearch} /> : 'Search'}
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link to="/about">
                        {isMediumOrLess ? <FontAwesomeIcon className="nav-list__icon" icon={faUserAstronaut} /> : 'About'}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
