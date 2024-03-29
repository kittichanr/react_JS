import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyWebApi, { LOGIN_URL } from "../../../lib/spotify"

async function refreshAccessToken(token) {
    try {
        spotifyWebApi.setAccessToken(token.accessToken)
        spotifyWebApi.setRefreshToken(token.refreshToken)

        const { body: refreshedToken } = await spotifyWebApi.refreshAccessToken()
        console.log('REFRESHED_TOKEN', refreshedToken);

        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
        }
    } catch (error) {
        return {
            ...token,
            error: "RefreshTokenError"
        }
    }
}

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            authorization: LOGIN_URL,
        }),
        // ...add more providers here
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({token, user, account}) {
            // Initial sign in
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000,
                }
            }

            //return previous token if the access token has not expired yet
            if (Date.now() < token.accessTokenExpires) {
                return token
            }

            //Access token has expired, so we need to refresh it...
            console.log('ACCESS TOKEN HAS EXPIRED');
            return await refreshAccessToken(token)
        },
        async session({ session, token }) {
            if (token) {
                session.accessToken = token.accessToken
                session.refreshToken = token.refreshToken
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }

            return session
        }
    },
})