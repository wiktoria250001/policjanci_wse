import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Station_database.css";
import button10 from "./button10.png";
import button20 from "./button20.png";
import button30 from "./button30.png";
import rectangle80 from "./Rectangle80.png";

import { Link } from "react-router-dom";

function Station_database({ text }) {
  const [stationsData, setStationsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aposterunki&maxFeatures=50&outputFormat=application%2Fjson"
      )
      .then((response) => {
        console.log("API response:", response.data);
        const data = response.data;
        if (data.features && data.features.length > 0) {
          const stations = data.features.map((feature) => {
            console.log("Feature properties:", feature.properties);
            return feature.properties;
          });
          setStationsData(stations);
        } else {
          console.error("No police station data found in the response");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the officer data!", error);
      });
  }, []);

  return (
    <div className="station_database">
      <div className="station_database_title">POLICE STATION DATABASE</div>
      <div className="image_container2">
        <img className="rectangle80" src={rectangle80} alt="rectangle80" />
        <Link to="/police_services/" className="button10">
          <img src={button10} alt="button10" />
        </Link>
        <Link
          to="/police_services/station_database/map_stations"
          className="button20"
        >
          <img src={button20} alt="button20" />
        </Link>
        <Link
          to="/police_services/station_database/station_dashboard"
          className="button30"
        >
          <img src={button30} alt="button30" />
        </Link>
      </div>
      <div className="table_mid1">
        <table className="stations_table">
          <thead>
            <tr>
              <th>Name of police station</th>
              <th>Functions</th>
              <th>Address</th>
              <th>Zip number</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {stationsData.map((stations, index) => (
              <tr key={index}>
                <td>{stations.nazwa}</td>
                <td>{stations.rodzaj}</td>
                <td>{stations.adres}</td>
                <td>{stations.kod_poczt}</td>
                <td>{stations.nr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Station_database;
