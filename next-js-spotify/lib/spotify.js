import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
    'user-read-email',
    'playlist-modify-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-private',
    'user-library-read',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-follow-read',
    'user-read-recently-played'
].join(',')

const params = {
    scope: scopes
}

const queryParamsString = new URLSearchParams(params)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}`

const spotifyWebApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyWebApi

export { LOGIN_URL }