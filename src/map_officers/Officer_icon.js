import L from "leaflet";
import marker from "./marker.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [30, 50],
    iconAnchor: [12.5, 50],
    tooltipAnchor: [0, 0],
  },
});

export const officersmarker = new LeafIcon({ iconUrl: marker });
