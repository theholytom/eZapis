import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MatchesPage from "./pages/MatchesPage";
import MatchViewPage from "./pages/MatchViewPage";
import MatchEditPage from "./pages/MatchEditPage";
import FavoritePage from "./pages/FavoritePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/matches/",
        element: <MatchesPage />,
    },
    {
        path: "/matches/:matchId/",
        element: <MatchViewPage />,
    },
    {
        path: "/matches/:matchId/edit",
        element: <MatchEditPage />,
    },
    {
      path: "/favorite",
      element: <FavoritePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
