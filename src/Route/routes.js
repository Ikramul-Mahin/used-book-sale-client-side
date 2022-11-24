import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CategoryProducts from "../Pages/Homes/BookCategory/CategoryCard/CategoryProducts/CategoryProducts";
import Home from "../Pages/Homes/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/categories/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])
export default router