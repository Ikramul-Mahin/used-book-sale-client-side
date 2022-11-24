import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CategoryProducts from "../Pages/Homes/BookCategory/CategoryCard/CategoryProducts/CategoryProducts";
import Home from "../Pages/Homes/Home/Home";

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
                element: <CategoryProducts></CategoryProducts>,
                loader: async ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }
])
export default router