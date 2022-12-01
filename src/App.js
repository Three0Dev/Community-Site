import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DiscoverPage from "./pages/DiscoverPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import ProjectPage, { projectLoader } from "./pages/ProjectPage.jsx";

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
        },
        {
          path: "project/:projectId",
          element: <ProjectPage />,
          loader: projectLoader
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
