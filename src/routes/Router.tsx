import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import Dashboard from "@/pages/dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default router;
