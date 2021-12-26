import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Episode } from '../../components/user-shows/Episode';
import { showDetailLoading } from '../../helper/loading-state-jsx/showDetailLoading';

import { getShow, selectShow, selectShowLoading } from './showDetailSlice';

export const ShowDetail = () => {
    const dispatch = useDispatch();
    const { showId } = useParams();
    const show = useSelector(selectShow);
    const showLoading = useSelector(selectShowLoading);

    useEffect(() => {
        dispatch(getShow(showId));
    }, [dispatch, showId])

    if (showLoading) return showDetailLoading();

    return (
        <div className="show-container">
            {Object.keys(show).length > 0 && (
                <>
                    <div className="show-header">
                        <div className="show-header__image" style={{ backgroundImage: `url(${show.images[0].url})` }}></div>
                        <div className="show-header__info">
                            <h2 className="show-header__info-type">PODCAST</h2>
                            <p className="show-header__info-name">{show.name}</p>
                            <p className="show-header__info-publisher">{show.publisher}</p>
                            <p className="show-header__info-description">{show.description}</p>
                        </div>
                    </div>

                    <div className="episodes-container">
                        {show.episodes.items.map(episode => <Episode key={episode.id} episode={episode} />)}
                    </div>
                </>
            )}
        </div>
    );
};