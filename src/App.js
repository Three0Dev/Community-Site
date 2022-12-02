import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DiscoverPage from "./pages/DiscoverPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "",
          element: <DiscoverPage />
        },
        {
          path: "resources",
          element: <ResourcesPage />
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
