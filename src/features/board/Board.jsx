//* IMPORT BASIC
import { Switch, Route } from 'react-router-dom';

//* IMPORT REACT COMPONENTS
import { CurrentUserPlaylists } from '../../components/user-playlists/CurrentUserPlaylists';
import { CurrentUserShows } from '../../components/user-shows/CurrentUserShows';
import { CurrentUserAlbums } from '../../components/user-albums/CurrentUserAlbums';
import { About } from '../../components/about/About';
import { Search } from '../search/Search';

import { PlaylistDetail } from '../playlistDetail/PlaylistDetail';
import { ShowDetail } from '../showDetail/ShowDetail';
import { AlbumDetail } from '../albumDetail/AlbumDetail';
import { ArtistDetail } from '../artistDetail/ArtistDetail';
import { NewPlaylist } from '../newPlaylist/NewPlaylist';
import { Player } from '../player/Player';
import { Redirect } from 'react-router-dom';

export const Board = () => {
  //* Rendering final Board - Main Routes here
  return (
    <div className='board'>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/playlists' />
        </Route>
        <Route path='/playlists' exact>
          <CurrentUserPlaylists />
        </Route>
        <Route path='/shows' exact>
          <CurrentUserShows />
        </Route>
        <Route path='/albums' exact>
          <CurrentUserAlbums />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        {/* Nested routes will be here because they need to be displayed in the board section as well */}
        <Route path='/playlists/:playlistId'>
          <PlaylistDetail />
        </Route>
        <Route path='/shows/:showId'>
          <ShowDetail />
        </Route>
        <Route path='/albums/:albumId'>
          <AlbumDetail />
        </Route>
        <Route path='/artists/:artistId'>
          <ArtistDetail />
        </Route>
        <Route path='/new-playlist'>
          <NewPlaylist />
        </Route>
      </Switch>

      <Player />
    </div>
  );
};
