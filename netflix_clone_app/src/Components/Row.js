//https://www.youtube.com/watch?v=-cMqr9HpZ-Y&t=3298s

import React, { useState, useEffect } from "react"
import axios from "../axios"
import "./Row.css"

const IMG_API = "https://image.tmdb.org/t/p/w1280"

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.table(movies)
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
          />
        ))}
      </div>
    </div>
  )
}

export default Row
