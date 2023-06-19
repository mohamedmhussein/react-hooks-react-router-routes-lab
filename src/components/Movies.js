import React from "react";
import { movies } from "../data";

function Movies() {
  function Movie({ movie }) {

    return (
      <div>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>

    )
  }

  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index) => { return <Movie movie={movie} key={index} /> })}
  </div>;
}

export default Movies;
