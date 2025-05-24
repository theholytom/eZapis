import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MatchesPage from "./pages/MatchesPage";
import MatchViewPage from "./pages/MatchViewPage";
import MatchEditPage from "./pages/MatchEditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFoundPage />,
  },
  {
    path:"/matches/",
    element: <MatchesPage />
  },
  {
    path: "/matches/:matchId/",
    element: <MatchViewPage />
  },
  {
    path: "/matches/:matchId/edit",
    element: <MatchEditPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
