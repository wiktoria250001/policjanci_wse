import React from "react";
import "./Accidents.css";
import button100 from "./button100.png";
import button200 from "./button200.png";
import button300 from "./button300.png";
import rectangle800 from "./Rectangle800.png";
import database100 from "./database100.png";
import { Link } from "react-router-dom";

function Accidents({ text }) {
  return (
    <div className="accidents">
      <div className="accidents_title">ACCIDENTS DATABASE</div>
      <div className="image_container3">
        <img className="rectangle800" src={rectangle800} alt="rectangle800" />
        <img className="button100" src={button100} alt="button100" />
        <img className="button300" src={button300} alt="button300" />
        <Link
          to="/police_services/accidents/map_accidents"
          className="accidents_map"
        >
          <img className="button200" src={button200} alt="button200" />
          <img className="database100" src={database100} alt="database100" />
        </Link>
      </div>
    </div>
  );
}

export default Accidents;
