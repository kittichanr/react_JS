export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:''
    // "BQAgKN5DkFco2zgQ5QDCYyWiDz5duP7AnFtHjw-ggDuEnyTwWC3MEFNv79OSlSKPI6sc0fFRYy_oJuAoYbuZm5CADxwzRWxeh7VvSFIP9x0Txwav-q8_wOCLUZofoMTroo6YgzPuoYa6qosxjuPOx2ViHd-JCUmB7d2Y9-OWj1kH9PQ-",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      }
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      }
    default:
      return state
  }
}

export default reducer
