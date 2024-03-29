import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState } from '../atom/songAtom'
import useSpotify from './useSpotify'

function useSongInfo() {
    const spotifyApi = useSpotify()
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState)
    const [songInfo, setSongInfo] = useState(null)

    useEffect(() => {
        const fetchSongInfo = async () => {
            const trackInfo = await fetch(
                `https://api.spotify.com/v1/tracks/${currentTrackId}`,
                {
                    headers: {
                        Authorization: `Bearer ${spotifyApi.getAccessToken()}`
                    }
                }
            ).then(res => res.json())
            setSongInfo(trackInfo)
        }

        fetchSongInfo()
    }, [])

    return songInfo
}

export default useSongInfo
