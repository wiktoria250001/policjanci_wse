import React from "react";
import "./Home.css";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top"></div>
      <div className="home_right"></div>
      <div className="home_top_about">Informacje ogólne</div>
      <div className="home_left"></div>
    </div>
  );
}

export default Home;
