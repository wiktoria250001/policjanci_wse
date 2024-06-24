import React, { useEffect, useState } from "react";
import "./Map_accidents.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import MarkerAccidentsPlacement from "./MarkerAccidentsPlacement";

function Map_accidents() {
  const [accidents, setAccidents] = useState(null);

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Awypadki&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          setAccidents(dane.data.features);
        });
    };
    getData();
  }, []);

  return (
    <div>
      <MapContainer center={[52.232222, 21.0]} zoom={6}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="GoogleSatelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenTopoMap">
            <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="granice wojewodztw db">
            <WMSTileLayer
              layers="Officers db"
              url="http://127.0.0.1:8080/geoserver/prge/ows"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Stations DB WFS">
            {accidents ? <GeoJSON dane={accidents} /> : ""}
            {/* jak już będzie okodowany marker i linijkę pod spodem wrzucisz markerplacement to zmień w linijce wyżej dane na data */}
            <MarkerAccidentsPlacement />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Map_accidents;
