import L from "leaflet";
import marker from "./merker_blue.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [50, 60],
    iconAnchor: [12.5, 50],
    tooltipAnchor: [0, 0],
  },
});

export const accidentsmarker = new LeafIcon({ iconUrl: marker });
