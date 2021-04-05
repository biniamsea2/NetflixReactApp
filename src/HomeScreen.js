import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        getUrl={requests.getNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" getUrl={requests.getTrending} />
      <Row title="Action Movies" getUrl={requests.getActionMovies} />
      <Row title="Comedy Movies" getUrl={requests.getComedyMovies} />
      <Row title="Horror Movies" getUrl={requests.getHorrorMovies} />
      <Row title="Romance Movies" getUrl={requests.getRomanceMovies} />
      <Row title="Documentaries" getUrl={requests.getDocumentaries} />
      <Row title="Crime Movies" getUrl={requests.getCrimeMovies} />
      <Row title="Reality TV" getUrl={requests.getRealStories} />

      {/* Row */}
    </div>
  );
}

export default HomeScreen;
