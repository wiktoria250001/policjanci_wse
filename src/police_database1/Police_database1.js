import React from "react";
import "./Police_database1.css";
import button1 from "./button1.png";
import button2 from "./button2.png";
import button3 from "./button3.png";
import rectangle8 from "./Rectangle 8.png";
import database from "./database.png";
import { Link } from "react-router-dom";

function Police_database1({ text }) {
  return (
    <div className="police_database1">
      <div className="police_database_title">POLICE DATABASE</div>
      <div className="image_container1">
        <img className="rectangle8" src={rectangle8} alt="rectangle8" />
        <img className="button1" src={button1} alt="button1" />
        <img className="button3" src={button3} alt="button3" />
        <Link
          to="/police_services/police_database1/map_officers"
          className="officers_map"
        >
          <img className="button2" src={button2} alt="button2" />
          <img className="database" src={database} alt="database" />
        </Link>
      </div>
    </div>
  );
}

export default Police_database1;
