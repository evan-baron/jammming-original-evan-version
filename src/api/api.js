const clientId = '6c39fe1d062a4bb7957efbdd1d88d8db';
const clientSecret = '246562ec138743c6968bd3f3c636b5d9';
const redirectUri = 'http://localhost:3000/callback';
const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify'
].join(' ');
const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;

const redirectToSpotify = () => {
    window.location.href = authorizeUrl;
};