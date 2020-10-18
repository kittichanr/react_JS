import React from "react"
import "./App.css"
import request from "./requests"
import Row from "./Components/Row"

function App() {
  return (
    <div className="App">
      {/* { Nav } */}
      {/* { Banner } */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchromanceMovies} />
      <Row title="Documantaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  )
}

export default App
