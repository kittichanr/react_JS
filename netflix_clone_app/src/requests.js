const API_KEY = 'b9da9307ba2bdb6d6fb89d0be4027ee7'

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/dicover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/dicover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/dicover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchromanceMovies:`/dicover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/dicover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests