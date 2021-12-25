//* IMPORT BASIC
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//* IMPORT REACT COMPONENTS
import { CurrentUserPlaylists } from '../../components/user-playlists/CurrentUserPlaylists';
import { CurrentUserShows } from '../../components/user-shows/CurrentUserShows';
import { CurrentUserAlbums } from '../../components/user-albums/CurrentUserAlbums';
import { Search } from '../search/Search';
import { About } from '../../components/about/About';

import { PlaylistDetail } from '../playlistDetail/PlaylistDetail';
import { ShowDetail } from '../showDetail/ShowDetail';
import { AlbumDetail } from '../albumDetail/AlbumDetail';
import { ArtistDetail } from '../artistDetail/ArtistDetail';
import { NewPlaylist } from '../newPlaylist/NewPlaylist';
import { Player } from '../player/Player';

export const Board = () => {

    //* Rendering final Board - Main Routes here
    return (
        <div className="board">
            <Router>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <Link to="/">Playlists</Link>
                        </li>
                        <li className="nav-list__item">
                            <Link to="/podcasts">Podcasts</Link>
                        </li>
                        <li className="nav-list__item">
                            <Link to="/albums">Albums</Link>
                        </li>
                        <li className="nav-list__item">
                            <Link to="/search">Search</Link>
                        </li>
                        <li className="nav-list__item">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact>
                        <CurrentUserPlaylists />
                    </Route>
                    <Route path="/podcasts">
                        <CurrentUserShows />
                    </Route>
                    <Route path="/albums">
                        <CurrentUserAlbums />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    {/* Routes of routes will be here because they need to be displayed in the board section */}
                    <Route path="/playlist">
                        <PlaylistDetail />
                    </Route>
                    <Route path="/show">
                        <ShowDetail />
                    </Route>
                    <Route path="/album">
                        <AlbumDetail />
                    </Route>
                    <Route path="/artist">
                        <ArtistDetail />
                    </Route>
                    <Route path="/new-playlist">
                        <NewPlaylist />
                    </Route>
                </Switch>

                <Player />
            </Router>

        </div>
    );
}