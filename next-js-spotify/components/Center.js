import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline';
import { shuffle } from 'lodash';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState, playlistState } from '../atom/playlistAtom';
import useSpotify from '../hooks/useSpotify';
import Songs from './Songs';

const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
]

function Center() {
    const spotifyApi = useSpotify()

    const { data: session } = useSession();
    const [color, setColor] = useState(null)
    const playlistId = useRecoilValue(playlistIdState)
    const [playlists, setPlaylists] = useRecoilState(playlistState)

    useEffect(() => {
        setColor(shuffle(colors).pop())
    }, [playlistId])

    useEffect(() => {
        spotifyApi.getPlaylist(playlistId).then(data => {
            setPlaylists(data.body)
        }).catch(err => console.log('something went wrong', err))
    }, [spotifyApi, playlistId])

    console.log(playlists);

    return (
        <div className="flex-grow">
            <header className="absolute top-5 right-8">
                <div className="
                flex items-center bg-black text-white
                space-x-3 opacity-90 hover:opacity-80 
                cursor-pointer rounded-full p-1 pr-2">
                    <img
                        className="rounded-full w-10 h-10"
                        src='https://cdn-icons-png.flaticon.com/128/149/149071.png'
                        alt="" />
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className="w-5 h-5" />
                </div>
            </header>
            <section className={`flex items-end space-x-7 
            bg-gradient-to-b to-black ${color} 
            h-80 text-white p-8`}>
                <img className='h-44 w-44 shadow-2xl' src={playlists?.images?.[0]?.url} alt="" />
                <div>
                    <p>PLAYLIST</p>
                    <h1 className={`font-bold text-2xl md:text-3xl xl:text-5xl`}>{playlists?.name}</h1>
                </div>
            </section>
            <div>
                <Songs/>
            </div>
        </div>
    )
}

export default Center
