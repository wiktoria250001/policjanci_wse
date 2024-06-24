import L from "leaflet";
import marker1 from "./marker1.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [50, 60],
    iconAnchor: [12.5, 50],
    tooltipAnchor: [0, 0],
  },
});

export const stationsmarker = new LeafIcon({ iconUrl: marker1 });
