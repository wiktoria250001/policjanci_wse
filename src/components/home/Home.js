import React from "react";
import "./Home.css";
import LANDSCAPE_1280 from "./LANDSCAPE_1280.jpg";
function Home({ text }) {
  return (
    <div className="home">
      <div className="home_right"></div>

      <div className="home_top_about">Informacje ogólne</div>

      <div className="home_left">
        <img className="plan" src={LANDSCAPE_1280} alt="logo"></img>
      </div>
    </div>
  );
}

export default Home;
