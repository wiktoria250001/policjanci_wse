import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LANDSCAPE_1280 from "./LANDSCAPE_1280.jpg";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top">
        <div className="home_top_about">Informacje ogólne</div>
      </div>
      <div className="home_left">
        <img className="logo_policji" src={LANDSCAPE_1280} alt="logo" />
      </div>
      <div className="home_right">
        <div className="home_right_title">GEOPORTAL</div>
        <div className="home_right_subtitle">
          Zarządzanie jednostkami policji i policjantami przypisanymi do danej
          jednostki
        </div>
        <Link to="/services">
          <button className="home_right_button">START</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
