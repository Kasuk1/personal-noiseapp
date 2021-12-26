//* IMPORT BASIC
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//* IMPORT REACT COMPONENTS
import { Tracklist } from '../../components/Tracklist';
import { AlbumInfo } from '../../components/user-albums/AlbumInfo';

//* IMPORT SELECTORS
import { getAlbum, selectAlbum, selectAlbumLoading } from './albumDetailSlice';

//* IMPORT HELPERS
import { playlistDetailLoading } from '../../helper/loading-state-jsx/playlistDetailLoading';

export const AlbumDetail = () => {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const album = useSelector(selectAlbum);

    //* Playlist and Userinfo loading selector
    const albumLoading = useSelector(selectAlbumLoading);

    useEffect(() => {
        dispatch(getAlbum(albumId));
    }, [dispatch, albumId])

    //* Handling playlist detail loading(pending) state
    if (albumLoading) return playlistDetailLoading();

    //* Return final playlist-detail
    return (
        <div className="playlist-detail" >
            {Object.keys(album).length > 0 && (
                <>
                    <AlbumInfo />
                    <Tracklist tracks={album.tracks.items} showRemove={false} />
                </>
            )}
        </div>
    );
};