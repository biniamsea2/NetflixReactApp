import React from 'react'
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";

function HomeScreen() {
    console.log(process.env.REACT_APP_API_KEY);
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner/>

            {/* Banner */}
            {/* Row */}
            
        </div>
    )
}

export default HomeScreen
