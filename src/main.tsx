import React from "react";
import ReactDOM from "react-dom/client";
import {
    // createBrowserRouter,
    RouterProvider,
    useParams,
    createHashRouter,
} from "react-router-dom";
import "./index.css";
import Homepage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MatchesPage from "./pages/MatchesPage";
import MatchViewPage from "./pages/MatchViewPage";
import MatchEditPage from "./pages/MatchEditPage";
import FavoritePage from "./pages/FavoritePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Wrapper components
function MatchEditWrapper() {
    const { matchId } = useParams();
    return <MatchEditPage matchId={matchId!} />;
}

function MatchViewWrapper() {
    const { matchId } = useParams();
    return <MatchViewPage matchId={matchId!} />;
}

const router = createHashRouter([
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
        element: <MatchViewWrapper />,
    },
    {
        path: "/matches/:matchId/edit",
        element: <MatchEditWrapper />,
    },
    {
        path: "/favorite",
        element: <FavoritePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
