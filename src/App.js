import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MovieListHeading from "./components/MovieListHeading"
import MovieList from "./components/MovieList"
import SearchBox from "./components/SearchBox"

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const getMovieRequest = async searchValue => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e9b421f2`

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center m-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        {movies.map((movie, i) => (
          <MovieList key={i} {...movie} />
        ))}
      </div>
    </div>
  )
}

export default App
