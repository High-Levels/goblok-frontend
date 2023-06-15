import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";
import Articel from "../pages/articel";
import CreateArticle from "../pages/createArticle";
import Profile from "../pages/Profile";


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
    },
    {
        path: "/create-article",
        element: <CreateArticle/>
    },
    {
        path:"/profile",
        element:<Profile/>,
    }
])

export default router;