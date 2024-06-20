import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Police_services from "./components/police_services/Police_services";
import Contact_us from "./contact_us/Contact_us";
import About_us from "./components/about_us/About_us";
import Police_database1 from "./police_database1/Police_database1";
import Map_officers from "./map_officers/Map_officers";
import Map_stations from "./map_stations/Map_stations";
import Station_database from "./components/station_database/Station_database";
import Accidents from "./components/accidents/Accidents";
import Map_accidents from "./components/map_accidents/Map_accidents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/police_services",
    element: <Police_services />,
  },
  {
    path: "/about_us",
    element: <About_us />,
  },
  {
    path: "/contact_us",
    element: <Contact_us />,
  },

  {
    path: "/police_services/police_database1",
    element: <Police_database1 />,
  },
  {
    path: "/police_services/police_database1/map_officers",
    element: <Map_officers />,
  },
  {
    path: "/police_services/station_database",
    element: <Station_database />,
  },
  {
    path: "/police_services/station_database/map_stations",
    element: <Map_stations />,
  },
  {
    path: "/police_services/accidents",
    element: <Accidents />,
  },
  {
    path: "/police_services/accidents/map_accidents",
    element: <Map_accidents />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
