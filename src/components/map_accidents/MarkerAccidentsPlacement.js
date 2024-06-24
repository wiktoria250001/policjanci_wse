import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { accidentsmarker } from "./Accidents_icon";
import axios from "axios";

function MarkerAccidentsPlacement() {
  const [accidents, setAccidents] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Awypadki&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((response) => {
          const features = response.data.features;
          const accidentsData = features.map((feature) => {
            const { coordinates } = feature.geometry;
            return {
              position: [coordinates[1], coordinates[0]],
              properties: feature.properties,
            };
          });
          setAccidents(accidentsData);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    };
    getData();
  }, []);

  return (
    <div>
      {accidents.map((accidents, index) => (
        <Marker
          key={index}
          icon={accidentsmarker}
          position={accidents.position}
        >
          <Popup>
            <strong>Kind of accident: </strong>
            {accidents.properties.what_happ}
            <br />
            <strong>Time: </strong>
            {accidents.properties.data_h}
            <br />
            <strong>Longitude: </strong>
            {accidents.properties.long}
            <br />
            <strong>Latitude: </strong>
            {accidents.properties.lat}
            <br />
            <strong>Participants: </strong>
            {accidents.properties.participan}
            <br />
            <strong>Injures: </strong>
            {accidents.properties.injures}
            <br />
            <strong>Services: </strong>
            {accidents.properties.sluzby}
            <br />
            <img
              src={accidents.properties.img_source_1}
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

export default MarkerAccidentsPlacement;
