import React from 'react';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root';
import Project from './Project';
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
        element: <Project />,
      },
      {
        path: "about",
        element: <AboutMe />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
