import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.getNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // closes the promise chain, evern if we arent using it its best to do so:
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, characterLength) {
    return string?.length > characterLength
      ? string.substr(0, characterLength - 1) + "..."
      : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // tmdb gives us this url to be able to use as image in our app.. we add an optional(?) because in the beginning the movie isnt going to be defined, it could be undefined
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* could be labled as title, name, or original_name*/}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* movie description comes back as "overview" */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
