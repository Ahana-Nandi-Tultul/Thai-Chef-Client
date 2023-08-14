import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Recipes from "../pages/Recipes/Recipes/Recipes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://thai-orchid-bistro-server-ahana-nandi-tultul.vercel.app/chefs`)
                
            },
            {
                path: '/recipes/:id',
                element: <Recipes></Recipes>,
                loader: ({params}) => fetch(`https://thai-orchid-bistro-server-ahana-nandi-tultul.vercel.app/recipes/${params.id}`)
            }
        ]
    }
])

export default router;