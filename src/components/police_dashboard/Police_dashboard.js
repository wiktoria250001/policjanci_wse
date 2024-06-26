import React, { useState, useEffect } from "react";
import "./Police_dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import button1 from "./button10.png";
import button2 from "./button20.png";
import button3 from "./button30.png";
import rectangle8 from "./Rectangle80.png";
import MediaCard from "./Officers_card";

function Police_dashboard() {
  const [police_dashboardData, setPolice_dashboardData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apolicjanci&maxFeatures=50&outputFormat=application%2Fjson"
      )
      .then((response) => {
        console.log("API response:", response.data);
        const data = response.data;
        if (data.features && data.features.length > 0) {
          const officers = data.features.map((feature) => feature.properties);
          setPolice_dashboardData(officers);
        } else {
          console.error("No police officer data found in the response");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the patient data!", error);
      });
  }, []);

  return (
    <div className="officers_dashboard">
      <div className="officers_top">
        <div className="service_title20">POLICE OFFICERS DASHBOARD</div>
        <div className="services_line"></div>
        <div className="database_menu">
          <img className="rectangle8" src={rectangle8} alt="rectangle8" />
          <Link to="/police_services/" className="button1">
            <img src={button1} alt="button1" />
          </Link>
          <Link
            to="/police_services/police_database1/map_officers"
            className="button2"
          >
            <img src={button2} alt="button2" />
          </Link>
          <Link to="/police_services/police_database1/" className="button3">
            <img src={button3} alt="button3" />
          </Link>
        </div>
      </div>
      <div className="card_mid">
        {police_dashboardData.map((officers) => {
          return (
            <MediaCard
              className="officers_cards"
              stopien={officers.stopien}
              imie={officers.imie}
              nazwisko={officers.nazwisko}
              pesel={officers.pesel}
              image={officers.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Police_dashboard;
