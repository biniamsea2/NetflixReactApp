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
      <Row title="Horror Movies" getUrl={requests.getHorrorMovies} />
      <Row title="Romance Movies" getUrl={requests.getRomanceMovies} />
      {/* <Row title="TV Family" getUrl={requests.getTvFamily} /> */}
      <Row title="Documentaries" getUrl={requests.getDocumentaries} />
      <Row title="Crime Movies" getUrl={requests.getCrimeMovies} />
      {/* <Row title="Reality TV" getUrl={requests.getRealStories} /> */}
      {/* <Row title="Tv Comedies" getUrl={requests.getTvComedies} /> */}
      {/* <Row title="Sci-Fi" getUrl={requests.getSciFi} /> */}
      {/* <Row title="Soapy TV Shows" getUrl={requests.getTvSoap} /> */}
      {/* <Row title="TV War & Politics" getUrl={requests.getWar} /> */}
      <Row title="Family Movies" getUrl={requests.getFamilyMovies} />
      <Row title="Thriller Movies" getUrl={requests.getThrillerMovies} />
      <Row title="Drama Movies" getUrl={requests.getDramaMovies} />
      {/* <Row title="TV Talk" getUrl={requests.getTalkTv} /> */}
      {/* <Row title="TV Drama" getUrl={requests.getDramaTv} /> */}
    </div>
  );
}

export default HomeScreen;
