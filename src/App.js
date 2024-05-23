import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
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
