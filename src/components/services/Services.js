import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Police_map from "../police_map/Police_map";

function services() {
  return (
    <div className="services">
      <div className="services_title">Dostępne usługi</div>
      <div className="services_bottom">
        <div className="services_options">
          <Link to="police_map">
            <div className="services_obj">Mapa</div>
          </Link>
          <Link to="dashboard">
            <div className="services_obj">Baza danych</div>
          </Link>
        </div>
        <div className="obrazki">obrazki</div>
      </div>
    </div>
  );
}

export default services;
