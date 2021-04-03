import React from "react";
import "./Banner.css";

function Banner() {

  function truncate(string, characterLength) {
    return string?.length > characterLength
      ? string.substr(0, characterLength - 1) + "..."
      : string;
  }
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
        <h1 className="banner_description">
          {truncate(
            `This is a test descriptis a test descriptis a test dst descriptis a tes
        t descriptis a test dst descriptis a test descriptis a test descriptis a test descriptis a test descriptis a test
         descriptis a test descriptis a riptis a test descriptis a test dst descriptis a tes
         t descriptis a test dst descriptis a test descriptis a test descriptis a test descriptis a test descriptis a test
          descriptis a test descriptis a riptis a test descriptis a test dst descriptis a tes
          t descriptis a test dst descriptis a test descriptis a test descriptis a test descriptis a test descriptis a test
           descriptis a test descriptis a test descriptis a test descriptis a test descriptis a test descriptis a test descri
         ptis a test description`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
