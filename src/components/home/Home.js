import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "./1.png";
import logo1 from "./logo.png";
import line3 from "./Line 3.png";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top">
        <img className="logo1" src={logo1} alt="logo" />

        <Link to="/about_us" className="home_top_about1">
          About us
        </Link>
      </div>
      <div className="home_left">
        <img className="logo_policji" src={logo} alt="logo" />
      </div>
      <div className="home_right">
        <img className="line3" src={line3} alt="line3" />
        <div className="home_right_title">ST. JOHN'S POLICE</div>
        <div className="home_right_subtitle">
          COMMITTED TO PROTECT YOU
          <Link to="/police_services">
            <button className="home_right_button">GET STARTED!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
