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
  const [getmovieTrialer, setMovieTRailer] = useState("");
  const [getallTogether, setAllTogether] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const base_url = "https://image.tmdb.org/t/p/original/";
  const urltest = `https://api.themoviedb.org/3/movie/${getMovie?.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`;
  const final = `https://www.youtube.com/watch?v=${getmovieTrialer?.key}`;

  const allTogether = `http://api.themoviedb.org/3/movie/${getMovie?.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`;


  // const newTrailer = `https://www.youtube.com/watch?v=${getallTogether?.videos.results.key}`;

  
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
      const movieInfo = await axios.get(allTogether);
      setAllTogether(movieInfo?.data);
      return movieInfo;
    }

    fetchMovieData();
  });

  useEffect(() => {
    async function fetchMovieDataTrailer() {
      const movieInfo2 = await axios.get(allTogether);
      setMovieTRailer(movieInfo2?.data.videos.results[0]);
      return movieInfo2;
    }

    fetchMovieDataTrailer();
  });



  
  useEffect(() => {
    async function fetchMovieKeyTrailer() {
      const movieTrailerKey = await axios.get(urltest);
      setTrailertest(movieTrailerKey?.data.results[0]);
      return movieTrailerKey;
    }

    fetchMovieKeyTrailer();
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
            {getallTogether?.name || getallTogether?.title || getallTogether?.original_name}
          </h1>
          <h1 className="modal_year_description">
            {dateFormat(getallTogether?.release_date, "yyyy")}
          </h1>
          <h1>{getallTogether?.runtime}</h1>
          <h1 className="modal_year_description">{getallTogether?.overview}</h1>
          {/* <h1>{getallTogether?.popularity}</h1> */}

          {/* <h1>{getallTogether?.videos.results[0]?.key}</h1> */}
          <h1>{getallTogether?.vote_average}</h1>

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
