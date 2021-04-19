import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import Modal from "react-modal";
import dateFormat from "dateformat";
import ReactPlayer from "react-player";
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import { TransverseLoading } from "react-loadingg";

function Row({ title, getUrl }) {
  const [movies, setMovies] = useState([]);
  const [getMovie, setGetMovie] = useState("");
  const [getmovieTrialer, setMovieTrailer] = useState("");
  const [getRunTime, setRunTime] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original/";
  // query to movie trailer with key
  const trailerLink = `https://www.youtube.com/watch?v=${getmovieTrialer?.key}`;
  // query to get key of movie
  const movieTrailer = `https://api.themoviedb.org/3/movie/${getMovie?.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`;
  const percentage = `${getMovie?.vote_average * 10}`;

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
    async function fetchMovieTrailer() {
      const movieInfo = await axios.get(movieTrailer);
      setMovieTrailer(movieInfo?.data.videos.results[0]);
      setRunTime(movieInfo?.data.runtime);
      setLoading(true);
      return movieInfo;
    }
    fetchMovieTrailer();
  });

  // convert movie runtime to hours and minutes
  const hours = Math.floor(getRunTime / 60);
  const minutes = getRunTime % 60;
  const finalMovieTime = `${hours}h ${minutes}m`;

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
          {/* check if loading is true or not and display the transverseLoading component while waiting */}
          {loading ? (
            <ReactPlayer
              url={trailerLink}
              width="100%"
              height="75%"
              controls={true}
            />
          ) : (
            // put loading indicator in a div to be able to position it to the top
            <div className="container_loader">
              <TransverseLoading color={"#e61e17"} />
            </div>
          )}
          <div className="container">
            <h1 className="modal_title">
              {getMovie?.name || getMovie?.title || getMovie?.original_name}
            </h1>
            <h1 className="modal_year">
              {dateFormat(getMovie?.release_date, "yyyy")}
            </h1>
            <h1 className="movie_runtime">{finalMovieTime}</h1>
            <div className="break"></div>

            <div style={{ width: 70, marginTop: 10 }}>
              {/* <ProgressBar width="170" trackWidth="13" percentage={percentage} /> */}

              {percentage >= 0 && percentage <= 30 && (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "red",
                    trailColor: "gray",
                  })}
                />
              )}
              {percentage >= 31 && percentage <= 60 && (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "yellow",
                    trailColor: "gray",
                  })}
                />
              )}
              {percentage >= 61 && percentage <= 100 && (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "green",
                    trailColor: "gray",
                  })}
                />
              )}
            </div>
            <h1 className="modal_description">{getMovie?.overview}</h1>
            <div>
              <button
                className="modal_button"
                onClick={() => setModalIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Row;
