import { useSession } from "next-auth/react";
import { signIn,useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyWebApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

function useSpotify() {
    const { data: session } = useSession(); 
 
    useEffect(() => {
        if(session){
            if(session.error === 'RefreshTokenError'){
                signIn()
            }

            spotifyWebApi.setAccessToken(session.accessToken)
        }
    }, [session])

    return spotifyWebApi
}

export default useSpotify
