import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { officersmarker } from "./Officer_icon";
import axios from "axios";

function MarkerOfficersPlacement() {
  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apolicjanci&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((response) => {
          const features = response.data.features;
          const officersData = features.map((feature) => {
            const { coordinates } = feature.geometry;
            return {
              position: [coordinates[1], coordinates[0]],
              properties: feature.properties,
            };
          });
          setOfficers(officersData);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    };
    getData();
  }, []);

  return (
    <div>
      {officers.map((officers, index) => (
        <Marker key={index} icon={officersmarker} position={officers.position}>
          <Popup>
            <strong>Name surname: </strong>
            {officers.properties.imie}
            <br />
            <strong>Address: </strong>
            {officers.properties.ulica}
            <br />
            {officers.properties.poczta}
            <br />
            <img
              src={officers.properties.img}
              alt="Lamp"
              width="110"
              height="100"
            ></img>
          </Popup>
        </Marker>
      ))}
    </div>
  );
}

export default MarkerOfficersPlacement;
