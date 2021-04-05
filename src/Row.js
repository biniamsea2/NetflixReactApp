import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, getUrl }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(getUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
    // dependency: [getUrl]
  }, [getUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            //   checking for deadlinks, if isLargeRow is true and we have a movie.poster_path or
            // if isLargeRow is false but we do have a movie.backdrop_path then display the image otherwise dont
            (movie.poster_path || movie.backdrop_path) && (
              <img
                className={`row_poster "}`}
                key={movie.id}
                src={`${base_url}${
                  //if movie is large display poster otherwise display backdrop
                  movie.poster_path
                }`}
                alt={movie?.name || movie?.name || movie?.original_name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
