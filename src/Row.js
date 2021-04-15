import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import Modal from "react-modal";
import dateFormat from 'dateformat';
import ReactPlayer from "react-player"
import movieTrailer from "movie-trailer";



function Row({ title, getUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [getMovie, setGetMovie] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  const base_url = "https://image.tmdb.org/t/p/original/";
  const urltest = `http://api.themoviedb.org/3/movie/${getMovie?.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
  const final = "https://www.youtube.com/watch?v=XtMThy8QKqU&t=238s"




  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(getUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
    // dependency: [getUrl]
  }, [getUrl]);

  const opts = {
    height:"390",
    width:"100%",
    playerVars:{
      autoplay: 1.
    },
  };
  const handleClick = (movie) =>{
    // if trailer is already playing and you click the same movie, close the trailer
    if(trailerUrl){
      setTrailerUrl("");
    }else{
      // movieTrailer is a npm module that when you pass in the movie name it will try and find a youtube trailer based on that name
      movieTrailer(movie?.name || "" )
      .then((url) =>{ 
        // allows us to get the id of the video from the youtube url trailer. search allows us to use get in the line
        const urlParams = new URLSearchParams(new URL(url).search);
        // give us everything after the v value
        setTrailerUrl(urlParams.get('v'));
      })
      .catch(error => console.log(error))
    }
  }

   
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
                onClick={() => handleClick(movie)}
                // onClick={() => { setModalIsOpen(true); setGetMovie(movie);}}
                src={`${base_url}${movie.poster_path}`}
                alt={movie?.name || movie?.title || movie?.original_name}
              />
            )
        )}
        {/* onRequestClose the setModalIsOpen will be set to false, closing the modal, we can also close it by clicking the escape key, if we dont want onRequestClose but want to include the escape key feature we need to add shouldCloseOnOverlayClick={false} */}
      {/* <Modal 
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={
        {
          overlay:{
            // give it that opacity look
            backgroundColor:'rgba(255,255,255,0.5)'

          },
          content:{
            backgroundColor:'black',
            color:'white'
          }
        }
      }>
        <h1>{getMovie?.name || getMovie?.title || getMovie?.original_name}</h1>
        <h1>{dateFormat(getMovie?.release_date, "yyyy")}</h1>
        <h1>{getMovie?.overview}</h1>


        <div>
       
        {getMovie.map(movie => {
          return  (
            <>
            <h4>{movie?.name || movie?.title || movie?.original_name}</h4>
            <h4>{movie.name}</h4>
            </>
          )
        })}

              <ReactPlayer
                url= {final}
                
              />

        </div>

          <div>
            <button className="modal_button" onClick={()=> setModalIsOpen(false)}>Close</button>
          </div>
      </Modal> */}

      </div>
                    {/* when we have a trailerUrl then show the youtube video */}
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
