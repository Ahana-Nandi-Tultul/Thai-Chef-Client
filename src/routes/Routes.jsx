import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Recipes from "../pages/Recipes/Recipes/Recipes";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Shared/Error/ErrorPage";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://thai-orchid-bistro-server-ahana-nandi-tultul.vercel.app/chefs`)
                
            },
            {
                path: '/recipes/:id',
                element:<PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://thai-orchid-bistro-server-ahana-nandi-tultul.vercel.app/recipes/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;