import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { stationsmarker } from "./Station_icon";
import axios from "axios";

function MarkerStationsPlacement() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aposterunki&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((response) => {
          const features = response.data.features;
          const stationsData = features.map((feature) => {
            const { coordinates } = feature.geometry;
            return {
              position: [coordinates[1], coordinates[0]],
              properties: feature.properties,
            };
          });
          setStations(stationsData);
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    };
    getData();
  }, []);

  return (
    <div>
      {stations.map((stations, index) => (
        <Marker key={index} icon={stationsmarker} position={stations.position}>
          <Popup>
            <strong>Police station name: </strong>
            {stations.properties.nazwa}
            <br />
            <strong>Unit funcionality: </strong>
            {stations.properties.rodzaj}
            <br />

            <strong>Address: </strong>
            {stations.properties.adres}
            <br />
            <strong>Zip code: </strong>
            {stations.properties.kod_poczt}
            <br />
            <strong>Contact: </strong>
            {stations.properties.nr}
            <br />
            <img
              src={stations.properties.img_source}
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

export default MarkerStationsPlacement;
