import React from "react";
import "./Station_database.css";
import button10 from "./button10.png";
import button20 from "./button20.png";
import button30 from "./button30.png";
import rectangle80 from "./Rectangle80.png";
import database10 from "./database10.png";
import { Link } from "react-router-dom";

function Station_database({ text }) {
  return (
    <div className="station_database">
      <div className="station_database_title">POLICE STATION DATABASE</div>
      <div className="image_container2">
        <img className="rectangle80" src={rectangle80} alt="rectangle80" />
        <img className="button10" src={button10} alt="button10" />
        <img className="button30" src={button30} alt="button30" />
        <Link
          to="/police_services/station_database/map_stations"
          className="stations_map"
        >
          <img className="button20" src={button20} alt="button20" />
          <img className="database10" src={database10} alt="database10" />
        </Link>
      </div>
    </div>
  );
}

export default Station_database;
