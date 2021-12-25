import React from 'react';
import { useSelector } from 'react-redux';

import { Episode } from '../../components/user-shows/Episode';
import { showDetailLoading } from '../../helper/loading-state-jsx/showDetailLoading';

import { selectShow, selectShowLoading } from './showDetailSlice';

export const ShowDetail = () => {
    const show = useSelector(selectShow);
    const showLoading = useSelector(selectShowLoading);

    if(showLoading) return showDetailLoading();

    return (
        <div className="show-container">
            <div className="show-header">
                <div className="show-header__image" style={{backgroundImage: `url(${show.images[0].url})`}}></div>
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
            
        </div>
    );
};