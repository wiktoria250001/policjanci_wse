import React, { useState, useEffect } from "react";
import "./Accidents_dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import button1 from "./button10.png";
import button2 from "./button20.png";
import button3 from "./button30.png";
import rectangle8 from "./Rectangle80.png";
import MediaCard from "./Accidents_cards";

function Accidents_dashboard() {
  const [accidents_dashboardData, setAccidents_dashboardData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Awypadki&maxFeatures=50&outputFormat=application%2Fjson"
      )
      .then((response) => {
        console.log("API response:", response.data);
        const data = response.data;
        if (data.features && data.features.length > 0) {
          const accidents = data.features.map((feature) => feature.properties);
          setAccidents_dashboardData(accidents);
        } else {
          console.error("No police accident  data found in the response");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the patient data!", error);
      });
  }, []);

  return (
    <div className="accidents_dashboard">
      <div className="accidents_top">
        <div className="service_title">ACCIDENTS DASHBOARD</div>
        <div className="services_line"></div>
        <div className="database_menu">
          <img className="rectangle8" src={rectangle8} alt="rectangle8" />
          <Link to="/police_services/" className="button1">
            <img src={button1} alt="button1" />
          </Link>
          <Link
            to="/police_services/accidents/map_accidents"
            className="button2"
          >
            <img src={button2} alt="button2" />
          </Link>
          <Link to="/police_services/accidents/" className="button3">
            <img src={button3} alt="button3" />
          </Link>
        </div>
      </div>
      <div className="card_mid">
        {accidents_dashboardData.map((accidents) => {
          return (
            <MediaCard
              className="accidents_card"
              long={accidents.long}
              lat={accidents.lat}
              what_happ={accidents.what_happ}
              image={accidents.img_source_1}
              sluzby={accidents.sluzby}
              injures={accidents.injures}
              data_h={accidents.data_h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Accidents_dashboard;
