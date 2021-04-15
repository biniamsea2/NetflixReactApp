import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import Modal from "react-modal";


function Row({ title, getUrl, h1 }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [getMovieName, setGetMovieName] = useState("");


  const [modalIsOpen, setModalIsOpen] = useState(false);
 

  


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
                onClick={() => { setModalIsOpen(true); setGetMovieName(movie?.name || movie?.original_title || movie?.original_name);}}
                src={`${base_url}${movie.poster_path}`}
                alt={movie?.name || movie?.name || movie?.original_name}
              />
            )
        )}
      <Modal isOpen={modalIsOpen}>
      <h1>{getMovieName}</h1>
      <div>
        <button onClick={()=> setModalIsOpen(false)}>Close Modal</button>
      </div>
      </Modal>
      </div>
      {/* when we have a trailerUrl then show the youtube video */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}



    </div>
  );
}

export default Row;
