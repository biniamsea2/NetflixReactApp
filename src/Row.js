import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import Modal from "react-modal";
import dateFormat from 'dateformat';
import ReactPlayer from "react-player"



function Row({ title, getUrl, h1 }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [getMovie, setGetMovie] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  const base_url = "https://image.tmdb.org/t/p/original/";
  const urltest = `http://api.themoviedb.org/3/movie/${getMovie.key}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
  const youtubeTest = "https://www.youtube.com/watch?v=ug50zmP9I7s"


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
    }
  }
  
  // const handleClick = (movie) =>{
  //   // if trailer is already playing and you click the same movie, close the trailer
  //   if(trailerUrl){
  //     setTrailerUrl("");
  //   }else{
  //     // movieTrailer is a npm module that when you pass in the movie name it will try and find a youtube trailer based on that name
  //     movieTrailer(movie?.name || "" )
  //     .then((url) =>{ 
  //     }).catch(error => console.log(error))
  //   }
  // }

   
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
                onClick={() => { setModalIsOpen(true); setGetMovie(movie);}}
                src={`${base_url}${movie.poster_path}`}
                alt={movie?.name || movie?.name || movie?.original_name}
              />
            )
        )}
        {/* onRequestClose the setModalIsOpen will be set to false, closing the modal, we can also close it by clicking the escape key, if we dont want onRequestClose but want to include the escape key feature we need to add shouldCloseOnOverlayClick={false} */}
      <Modal 
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
        <h1>{getMovie?.key}</h1>

        <div>
          <ReactPlayer
            url= {youtubeTest}
            
          />
        </div>

          <div>
            <button className="modal_button" onClick={()=> setModalIsOpen(false)}>Close</button>
          </div>
      </Modal>
      </div>
      {/* when we have a trailerUrl then show the youtube video */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
