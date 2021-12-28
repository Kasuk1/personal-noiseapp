export const truncatePlaylistName = (text) => {
    return text.length > 20 ? `${text.substring(0, 17)}...` : text;
}

export const truncatePlaylistDescription = (text) => {
    return text.length > 30 ? `${text.substring(0, 27)}...` : text;
}

export const truncateArtistName = (text) => {
    return text.length > 18 ? `${text.substring(0, 15)}...` : text;
}

export const truncateUserInfoName = (text) => {
    return text.length > 8 ? `${text.substring(0, 5)}...` : text;
}