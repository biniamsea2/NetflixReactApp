import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row title="Popular on Netflix" getUrl={requests.getTrending}/>
      <Row title="Action Movies" getUrl={requests.getActionMovies} />
      <Row title="Comedy Movies" getUrl={requests.getComedyMovies} />
      <Row title="Adventure Movies" getUrl={requests.getAdventureMovies} />
      <Row title="Family Movies" getUrl={requests.getFamilyMovies} />
      <Row title="Horror Movies" getUrl={requests.getHorrorMovies} />
      <Row title="Documentaries" getUrl={requests.getDocumentaries} />
      <Row title="Thriller Movies" getUrl={requests.getThrillerMovies} />
      <Row title="Crime Movies" getUrl={requests.getCrimeMovies} />
      <Row title="Romance Movies" getUrl={requests.getRomanceMovies} />
      <Row title="Animation Movies" getUrl={requests.getAnimationMovies} />
      <Row title="History Movies" getUrl={requests.getHistoryMovies} />
      <Row title="Drama Movies" getUrl={requests.getDramaMovies} />
      <Row title="Fantasy Movies" getUrl={requests.getFantasyMovies} />
      <Row title="Sci-Fi Movies" getUrl={requests.getSciFiMovies} />
      {/* <Row title="Tv Comedies" getUrl={requests.getTvComedies} /> */}
    </div>
  );
}

export default HomeScreen;
