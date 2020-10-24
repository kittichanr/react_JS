//https://www.youtube.com/watch?v=-cMqr9HpZ-Y&t=3298s

import React, { useState, useEffect } from "react"
import axios from "../axios"
import "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const IMG_API = "https://image.tmdb.org/t/p/w1280"

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movies) => (
          <img
            key={movies.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={
              isLargeRow
                ? `${IMG_API}${movies.poster_path}`
                : `${IMG_API}${movies.backdrop_path}`
            }
            alt={movies.name}
            onClick={() => handleClick(movies)}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
