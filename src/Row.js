import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import Modal from "react-modal";
import dateFormat from "dateformat";
import ReactPlayer from "react-player";

function Row({ title, getUrl }) {
  const [movies, setMovies] = useState([]);
  const [getMovie, setGetMovie] = useState("");
  const [getTrailer, setTrailertest] = useState("");
  const [getRuntime, setRuntime] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original/";
  const urltest = `https://api.themoviedb.org/3/movie/${getMovie?.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`;
  const final = `https://www.youtube.com/watch?v=${getTrailer?.key}`;

  const movieInfo = `https://api.themoviedb.org/3/movie/${getMovie?.id}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(getUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
    // dependency: [getUrl]
  }, [getUrl]);

  useEffect(() => {
    async function fetchMovieData() {
      const movieRequest = await axios.get(urltest);
      setTrailertest(movieRequest?.data.results[0]);
      return movieRequest;
    }

    fetchMovieData();
  });

  useEffect(() => {
    async function fetchMovieRuntime() {
      const movieRunTime = await axios.get(movieInfo);
      setRuntime(movieRunTime?.data.runtime);
      return movieRunTime;
    }

    fetchMovieRuntime();
  });


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
                className="row_poster"
                key={movie.id}
                onClick={() => {
                  setModalIsOpen(true);
                  setGetMovie(movie);
                }}
                src={`${base_url}${movie.poster_path}`}
                alt={movie?.name || movie?.title || movie?.original_name}
              />
            )
        )}
        {/* onRequestClose the setModalIsOpen will be set to false, closing the modal, we can also close it by clicking the escape key, if we dont want onRequestClose but want to include the escape key feature we need to add shouldCloseOnOverlayClick={false} */}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              // give it that opacity look
              backgroundColor: "rgba(255,255,255,0.5)",
              marginTop: "40px",
            },
            content: {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          <ReactPlayer url={final} width="100%" height="75%" controls={true} />

          <h1 className="modal_title">
            {getMovie?.name || getMovie?.title || getMovie?.original_name}
          </h1>
          <h1 className="modal_year_description">
            {dateFormat(getMovie?.release_date, "yyyy")}
          </h1>
          <h1 className="modal_year_description">{getMovie?.overview}</h1>
          <h1>{getRuntime}</h1>
          {/* <h1>{movieCast}</h1> */}

          <div>
            <button
              className="modal_button"
              onClick={() => setModalIsOpen(false)}
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Row;
