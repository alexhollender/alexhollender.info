import React from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root';
import Project from './Project';
import Wikipedia2023 from './Wikipedia2023';
import AboutMe from './AboutMe';
import ErrorPage from './ErrorPage';
import './scss/index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Project /> },
      {
        path: "/:projectPath",
        element: <Project />
      },
      {
        path: "aboutme",
        element: <AboutMe />
      }
    ]
  },
  {
    path: "wikipedia-2023-redesign",
    element: <Wikipedia2023 />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
