import React from "react";
import { actors } from "../data";
//import { act } from "react-dom/test-utils";

function Actors() {
  function Movie({ movie }) { return (<li>{movie}</li>) }
  function Actor({ actor }) {
    return (
      <div>
        <p>{actor.name}</p>
        <ul>
          {actor.movies.map((movie, index) => { return <Movie movie={movie} key={index} /> })}
        </ul>
      </div>
    )
  }

  return <div>
    <h1>Actors Page</h1>
    {actors.map((actor, index) => { return <Actor actor={actor} key={index} /> })}
  </div>;
}

export default Actors;
