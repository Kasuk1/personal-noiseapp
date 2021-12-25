//* IMPORT BASIC
import React from 'react';

export const About = () => {
    return (
        <div className="about-container">
            <h2 className="heading-2">About</h2>
            <p className="p-text">This project was created to practice React-Redux with Thunk Actions. Fetch API was part of these objectives as well.</p>

            <h2 className="heading-2">Versions</h2>
            <div className="about__version">
                <h3 className="heading-3">1.0</h3>
                <ul className="about__list">
                    <li className="about__item">Web-app created with <code className="code-span">npx create-react-app my-app --template redux</code>.</li>
                    <li className="about__item">Web-app designed in Figma with a Medium Fidelity Design like a result.</li>
                    <li className="about__item">Js Module implemented with token request. All the Spotify API's requests will be implemented in there.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">1.1</h3>
                <ul className="about__list">
                    <li className="about__item">Stablished the User and Board reducers with its respective React components classes.</li>
                    <li className="about__item">Stablished the Scss structure with initial imports.</li>
                    <li className="about__item">Stablished the React Routes in the Board component.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">1.2</h3>
                <ul className="about__list">
                    <li className="about__item">Defined the Playlist reducer with its respective components.</li>
                    <li className="about__item">Defined the Playlist reducer with their respective thunk methods.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">1.3</h3>
                <ul className="about__list">
                    <li className="about__item">Defined the Podcasts(Shows) reducer with its respective components.</li>
                    <li className="about__item">Defined the Podcasts(Shows) reducer with their respective thunk methods.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">1.4</h3>
                <ul className="about__list">
                    <li className="about__item">Defined the Albums reducer with its respective components.</li>
                    <li className="about__item">Defined the Albums reducer with their respective thunk methods.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">1.5</h3>
                <ul className="about__list">
                    <li className="about__item">Defined the Search reducer with its respective components.</li>
                    <li className="about__item">Defined the Search reducer with their respective thunk methods.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">2.0</h3>
                <ul className="about__list">
                    <li className="about__item">Defined the Board Container Loading state.</li>
                    <li className="about__item">Defined the Board Container Loading state style.</li>
                    <li className="about__item">Defined the Board Items Loading state.</li>
                    <li className="about__item">Defined the Board Items Loading state style.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">2.1</h3>
                <ul className="about__list">
                    <li className="about__item">Defined the Shows Container Loading state.</li>
                    <li className="about__item">Defined the Shows Container Loading state style.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">2.2</h3>
                <ul className="about__list">
                    <li className="about__item">Defined the ArtistDetail reducer with its respective components.</li>
                    <li className="about__item">Defined the ArtistDetail reducer with their respective thunk methods.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">2.3</h3>
                <ul className="about__list">
                    <li className="about__item">Defined the ArtistDetail Info with its respective components.</li>
                    <li className="about__item">Defined the ArtistDetail Info with their respective thunk methods.</li>
                    <li className="about__item">Defined the ArtistDetail Top-Tracks with its respective components.</li>
                    <li className="about__item">Defined the ArtistDetail Top-Tracks with their respective thunk methods.</li>
                    <li className="about__item">Defined the ArtistDetail Albums with its respective components.</li>
                    <li className="about__item">Defined the ArtistDetail Albums with their respective thunk methods.</li>
                    <li className="about__item">Defined the ArtistDetail Related-Artists with its respective components.</li>
                    <li className="about__item">Defined the ArtistDetail Related-Artists with their respective thunk methods.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">2.4</h3>
                <ul className="about__list">
                    <li className="about__item">Defined the Player with its respective components.</li>
                    <li className="about__item">Defined the Player with their respective thunk methods.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">2.5</h3>
                <ul className="about__list">
                    <li className="about__item">Created new OptionsMenu based in MenuContext Component with Custom Hook.</li>
                    <li className="about__item">Stablished add and removed single track to/from playlist. Thi remove track(OptionMenu-ContextMenu) will depend of the component. For example it can't appear a remove track option when we select a track from an album or when we have a playlist that we are not its owner.</li>
                </ul>
            </div>
            <div className="about__version">
                <h3 className="heading-3">2.6</h3>
                <ul className="about__list">
                    <li className="about__item">Created the New Playlist Component. Just we can create the new playlist with name and description. Image maybe in the future.</li>
                </ul>
            </div>
        </div>
    );
};