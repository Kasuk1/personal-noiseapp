//! BASIC VARIABLES
const CLIENT_ID = "a90ef9e2a11040709163cbb28282d092";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://localhost:3000/";

const SCOPES = ["user-read-private", 
                "user-read-email", 
                "playlist-modify-public",
                "playlist-modify-private", 
                "user-follow-read",
                "user-top-read",
                "playlist-read-private", 
                "user-library-read",
                "user-read-playback-position",
                "user-read-currently-playing",
                "user-read-playback-state"];

const SCOPES_URL_PARAM = SCOPES.join("%20");

//! SPOTIFY MODULE
export const Spotify  = {

    getAccessToken() {
        /* let token = localStorage.getItem("token");
        if(token) return token; */
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPES_URL_PARAM}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;
    },

    /* getCurrentToken() {
        const currentAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const currenExpirationTime = window.location.href.match(/expires_in=([^&]*)/);

        if(currentAccessToken && currenExpirationTime) {
            setToken(currentAccessToken[1]);
            const expiresIn = Number(currenExpirationTime[1]);
            localStorage.setItem("expiresIn", expiresIn);

            window.setTimeout(() => {
                setToken("");
            }, expiresIn * 10000);
            window.history.pushState("Access Token", null, "/");

            return localStorage.getItem("token");
        } else {
            return;
        }
    }, */


    //*-----------------------------------USER INFO SLICE REQUESTS--------------------------------*/
    async getCurrentUserInfo() {
        const currentToken = localStorage.getItem("token");

        const endpoint = "https://api.spotify.com/v1/me";
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });

        const json = await response.json();
        return json;
    },

    async getUserTopArtists() {
        const currentToken = localStorage.getItem("token");

        const endpoint = "https://api.spotify.com/v1/me/top/artists?limit=4";
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });

        const json = await response.json();
        return json;
    },

    //*-----------------------------------BOARD SLICE REQUESTS--------------------------------*/
    async getUserPlaylists() {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/me/playlists?limit=50`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });

        const json = await response.json();
        return json;
    },

    async getUserShows() {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/me/shows?limit=50`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });

        const json = await response.json();
        return json;
    },

    async getUserAlbums() {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/me/albums?limit=50`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });

        const json = await response.json();
        return json;
    },

    //*-----------------------------------PLAYLIST DETAIL SLICE REQUESTS--------------------------------*/
    async getPlaylist(playlistID) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/playlists/${playlistID}`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });

        const json = await response.json();

        const trackIDS = json.tracks.items.map(track => track.track.id).slice(0,50).join(",");
        const trackList = await this.getSeveralTracks(trackIDS);

        return {
            ...json,
            tracks: {
                items: trackList || [],
                total: json.tracks.total
            }
        };
    },

    async getUserInfoByID(userID) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/users/${userID}`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });

        const json = await response.json();
        return json;
    },

    //*-----------------------------------SHOW DETAIL SLICE REQUESTS--------------------------------*/
    async getShow(showID) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/shows/${showID}`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });

        const json = await response.json();
        return json;
    },

    //*-----------------------------------ALBUM DETAIL SLICE REQUESTS--------------------------------*/
    async getAlbum(albumID) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/albums/${albumID}`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });

        const json = await response.json();
        
        const trackIDs = json.tracks.items.map(track => track.id).slice(0,50).join(",");
        const trackList = await this.getSeveralTracks(trackIDs);

        return {
            ...json,
            tracks: {
                items: trackList || [],
                total: json.tracks.total
            }
        };
    },

    async getArtistInfo(artistID) {
        const currentToken = localStorage.getItem("token");
        
        const endpoint = `https://api.spotify.com/v1/artists/${artistID}`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });
        
        const json = await response.json();
        return json;
    },

    //*-----------------------------------ARTIST DETAIL SLICE REQUESTS--------------------------------*/
    async getArtist(artistID) {
        const currentToken = localStorage.getItem("token");
        
        const endpoint = `https://api.spotify.com/v1/artists/${artistID}`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });
        const json = await response.json();
        return json;
    },

    async getArtistTopTracks(artistID) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=from_token`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });
        const json = response.json();
        return json;
    },

    async getArtistAlbums(artistID) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/artists/${artistID}/albums`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });
        const json = response.json();
        return json;
    },

    async getArtistRelatedArtists(artistID) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/artists/${artistID}/related-artists`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });
        const json = response.json();
        return json;
    },




    //*-----------------------------------GET SEVERAL TRACKS--------------------------------*/
    async getSeveralTracks(trackIDs) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/tracks?ids=${trackIDs}`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });
        const json = await response.json();
        return json.tracks;
    },



    //*-----------------------------------PLAYER SLICE REQUESTS--------------------------------*/
    async getCurrentPlayingTrack() {
        const currentToken = localStorage.getItem("token");
        
        const endpoint = `https://api.spotify.com/v1/me/player/currently-playing?market=from_token`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });
        const json = await response.json();
        return json;
    },

    //*-----------------------------------SEARCH SLICE REQUESTS--------------------------------*/
    async searchItem(searchTerm) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track%2Cartist%2Calbum`;
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${currentToken}`
            }
        });
        const json = await response.json();
        return json;
    },


    //*-----------------------------------NEW PLAYLIST SLICE REQUESTS--------------------------------*/
    async createPlaylist(name, description) {
        const currentToken = localStorage.getItem("token");

        const userID = await this.getCurrentUserInfo().then(user => user.id);

        const endpoint = `https://api.spotify.com/v1/users/${userID}/playlists`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${currentToken}`
            },
            body: JSON.stringify({
                name,
                description,
                public: true
            })
        });
        const json = await response.json();
        return json;
    },


    async addItemsToPlaylist(playlistID, uris) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${currentToken}`
            },
            body: JSON.stringify({
                uris: [uris],
                position: 0
            })
        });
        const json = await response.json();
        return json;
    },

    async removePlaylistItems(playlistID, uris) {
        const currentToken = localStorage.getItem("token");

        const endpoint = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${currentToken}`
            },
            body: JSON.stringify({
                uris: [uris]
            })
        });
        const json = await response.json();
        return json;
    }

}
