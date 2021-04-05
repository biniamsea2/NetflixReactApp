import React from 'react'
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            <Row/>

            {/* Row */}
            
        </div>
    )
}

export default HomeScreen
