import React, { useState, useEffect } from "react";
import "./Police_database1.css";
import axios from "axios";
import button1 from "./button1.png";
import button2 from "./button2.png";
import button3 from "./button3.png";
import rectangle8 from "./Rectangle 8.png";
import { Link } from "react-router-dom";

function PoliceDatabase1() {
  const [officersData, setOfficersData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apolicjanci&maxFeatures=50&outputFormat=application%2Fjson"
      )
      .then((response) => {
        console.log("API response:", response.data);
        const data = response.data;
        if (data.features && data.features.length > 0) {
          const officers = data.features.map((feature) => {
            console.log("Feature properties:", feature.properties);
            return feature.properties;
          });
          setOfficersData(officers);
        } else {
          console.error("No police officer data found in the response");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the officer data!", error);
      });
  }, []);

  return (
    <div className="police_database1">
      <div className="police_database_title">POLICE DATABASE</div>
      <div className="image_container1">
        <img className="rectangle8" src={rectangle8} alt="rectangle8" />
        <Link
          to="/police_services/police_database1/button1"
          className="button1"
        >
          <img src={button1} alt="button1" />
        </Link>
        <Link
          to="/police_services/police_database1/map_officers"
          className="button2"
        >
          <img src={button2} alt="button2" />
        </Link>
        <Link
          to="/police_services/police_database1/button3"
          className="button3"
        >
          <img src={button3} alt="button3" />
        </Link>
      </div>
      <div className="table_mid">
        <table className="officers_table">
          <thead>
            <tr>
              <th>Rank of policeman</th>
              <th>Name</th>
              <th>Surname</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {officersData.map((officers, index) => (
              <tr key={index}>
                <td>{officers.stopien}</td>
                <td>{officers.imie}</td>
                <td>{officers.nazwisko}</td>
                <td>{officers.pesel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PoliceDatabase1;
