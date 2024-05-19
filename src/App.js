import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/home/services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/services",
    element: <Services />,
  },
]);
function App() {
  const imie = "tomasz";

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
