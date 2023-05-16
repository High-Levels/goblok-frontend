import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";
import Articel from "../pages/articel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/articel",
        element: <Articel/>
    }
])

export default router;