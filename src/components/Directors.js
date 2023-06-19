import React from "react";
import { directors } from "../data";

function Directors() {
  function Movie({ movie }) { return (<li>{movie}</li>) }
  function Director({ director }) {
    return (
      <div>
        <p>{director.name}</p>
        <ul>
          {director.movies.map((movie, index) => { return <Movie movie={movie} key={index} /> })}
        </ul>
      </div>
    )
  }



  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => <Director director={director} key={index} />)}
    </div>
  );
}

export default Directors;
