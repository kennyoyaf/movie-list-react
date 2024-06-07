import React from "react"

const MovieList = ({ Poster, Title, Year }) => {
  return (
    <div className="image-container col d-flex justify-content-center mb-5">
      <img src={Poster} alt="Poster-img" />
      <div className="overlay text-light d-flex align-items-center justify-content-center">
        {Title}
      </div>
    </div>
  )
}

export default MovieList
