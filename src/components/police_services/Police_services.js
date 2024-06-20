import React from "react";
import { Link } from "react-router-dom";
import "./Police_services.css";
import image3 from "./image 3.png"; // Ensure these paths are correct
import image4 from "./image 4.png";
import image6 from "./image 6.png";

function PoliceServices() {
  return (
    <div className="services">
      <div className="services_title">Services available</div>
      <div className="services_bottom">
        <Link to="/police_services/police_database1" className="service_button">
          <img className="service_image" src={image3} alt="Police Officers" />
          <div className="service_title">POLICE OFFICERS</div>
        </Link>
        <Link to="/police_services/station_database" className="service_button">
          <img className="service_image" src={image6} alt="Police Stations" />
          <div className="service_title">POLICE STATIONS</div>
        </Link>
        <Link to="/police_services/accidents" className="service_button">
          <img className="service_image" src={image4} alt="Accidents" />
          <div className="service_title">ACCIDENTS</div>
        </Link>
      </div>
    </div>
  );
}

export default PoliceServices;
