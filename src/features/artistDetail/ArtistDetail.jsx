//* IMPORT BASIC
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//* IMPORT REACT COMPONENTS
import { ArtistAlbums } from '../../components/artist-info/ArtistAlbums';
import { ArtistInfo } from '../../components/artist-info/ArtistInfo';
import { ArtistRelatedArtists } from '../../components/artist-info/ArtistRelatedArtists';
import { ArtistTopTracks } from '../../components/artist-info/ArtistTopTracks';
import { getArtist, getArtistAlbums, getArtistRelatedArtists, getArtistTopTracks, selectArtist, selectArtistAlbumsLoading, selectArtistLoading, selectArtistRelatedArtistsLoading, selectArtistTopTracksLoading } from './artistDetailSlice';

//*IMPORT HELPER FUNCTIONS
import { artistDetailLoading } from '../../helper/loading-state-jsx/artistDetailLoading';

export const ArtistDetail = () => {
    const dispatch = useDispatch();
    const { artistId } = useParams();
    const artist = useSelector(selectArtist);

    const artistLoading = useSelector(selectArtistLoading);
    const artistTopTracksLoading = useSelector(selectArtistTopTracksLoading);
    const artistAlbumsLoading = useSelector(selectArtistAlbumsLoading);
    const artistRelatedArtistsLoading = useSelector(selectArtistRelatedArtistsLoading);

    useEffect(() => {
        dispatch(getArtist(artistId));
        dispatch(getArtistTopTracks(artistId));
        dispatch(getArtistAlbums(artistId));
        dispatch(getArtistRelatedArtists(artistId));
    }, [dispatch, artistId]);

    if (artistLoading || artistTopTracksLoading || artistAlbumsLoading || artistRelatedArtistsLoading) return artistDetailLoading();


    return (
        <div className="artist-detail-container">
            {Object.keys(artist).length > 0 && (
                <>
                    <ArtistInfo />
                    <h2 className="heading-2">Popular</h2>
                    <ArtistTopTracks />
                    <h2 className="heading-2">Singles and EPs</h2>
                    <ArtistAlbums />
                    <h2 className="heading-2">Fans also like</h2>
                    <ArtistRelatedArtists />
                </>
            )}
        </div>
    );
};