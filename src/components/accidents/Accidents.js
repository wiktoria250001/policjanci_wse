import React, { useState, useEffect } from "react";
import "./Accidents.css";
import axios from "axios";
import button1 from "./button100.png";
import button2 from "./button200.png";
import button3 from "./button300.png";
import rectangle8 from "./Rectangle800.png";
import { Link } from "react-router-dom";

function AccidentsDatabase1() {
  const [accidentsData, setAccidentsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Awypadki&maxFeatures=50&outputFormat=application%2Fjson"
      )
      .then((response) => {
        console.log("API response:", response.data);
        const data = response.data;
        if (data.features && data.features.length > 0) {
          const accidents = data.features.map((feature) => {
            console.log("Feature properties:", feature.properties);
            return feature.properties;
          });
          setAccidentsData(accidents);
        } else {
          console.error("No accident data found in the response");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the accident data!", error);
      });
  }, []);

  return (
    <div className="accidents_database1">
      <div className="accident_database_title">ACCIDENTS DATABASE</div>
      <div className="image_container1">
        <img className="rectangle8" src={rectangle8} alt="rectangle8" />
        <Link to="/police_services/" className="button1">
          <img src={button1} alt="button1" />
        </Link>
        <Link to="/police_services/accidents/map_accidents" className="button2">
          <img src={button2} alt="button2" />
        </Link>
        <Link
          to="/police_services/accidents/accidents_dashboard/"
          className="button3"
        >
          <img src={button3} alt="button3" />
        </Link>
      </div>
      <div className="table_mid">
        <table className="accidents_table">
          <thead>
            <tr>
              <th>Time of accidents</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Participants</th>
              <th>Injuries</th>
              <th>Facilities</th>
              <th>Services</th>
            </tr>
          </thead>
          <tbody>
            {accidentsData.map((accident, index) => (
              <tr key={index}>
                <td>{accident.data_h}</td>
                <td>{accident.long}</td>
                <td>{accident.lat}</td>
                <td>{accident.participan}</td>
                <td>{accident.injures}</td>
                <td>{accident.what_happ}</td>
                <td>{accident.sluzby}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccidentsDatabase1;
