import React, { useState, useEffect } from "react";
import "./Station_dashboard.css"; // Poprawione rozszerzenie pliku CSS
import { Link } from "react-router-dom";
import axios from "axios";
import button1 from "./button10.png";
import button2 from "./button20.png";
import button3 from "./button30.png";
import rectangle8 from "./Rectangle80.png";
import MediaCard from "./Station_cards";

function Stations_dashboard() {
  const [stations_dashboardData, setStations_dashboardData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aposterunki&maxFeatures=50&outputFormat=application%2Fjson"
      )
      .then((response) => {
        console.log("API response:", response.data);
        const data = response.data;
        if (data.features && data.features.length > 0) {
          const stations = data.features.map((feature) => feature.properties);
          setStations_dashboardData(stations);
        } else {
          console.error("No police station data found in the response");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the station data!", error);
      });
  }, []);

  return (
    <div className="stations_dashboard">
      <div className="stations_top">
        <div className="service_title100">POLICE STATIONS DASHBOARD</div>
        <div className="services_line"></div>
        <div className="database_menu">
          <img className="rectangle8" src={rectangle8} alt="rectangle8" />
          <Link to="/police_services/" className="button1">
            <img src={button1} alt="button1" />
          </Link>
          <Link
            to="/police_services/police_database1/map_stations"
            className="button2"
          >
            <img src={button2} alt="button2" />
          </Link>
          <Link to="/police_services/station_database/" className="button3">
            <img src={button3} alt="button3" />
          </Link>
        </div>
      </div>
      <div className="card_mid">
        {stations_dashboardData.map((station, index) => (
          <MediaCard
            key={index}
            className="stations_cards"
            nazwa={station.nazwa}
            adres={station.adres}
            kod_poczt={station.kod_poczt}
            nr={station.nr}
            image={station.img_source}
          />
        ))}
      </div>
    </div>
  );
}

export default Stations_dashboard;
