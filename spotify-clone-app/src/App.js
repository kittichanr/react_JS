import React, { useEffect } from "react"
import "./App.css"
import Login from "./components/Login"
import Player from "./components/Player"
import { getTokenFromUrl } from "./utils/spotify"
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from "./context/DataLayer"

const spotify = new SpotifyWebApi()
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        })
      })
      spotify.getPlaylist().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlist: playlists,
        })
      })
    }
  }, [])
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  )
}

export default App
