import React from "react";
import './Banner.css';

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC")`,
        // backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        backgroundPosition: "center center",

      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">This is a test description</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
