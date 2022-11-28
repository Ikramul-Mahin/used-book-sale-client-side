import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CategoryProducts from "../Pages/Homes/BookCategory/CategoryCard/CategoryProducts/CategoryProducts";
import Home from "../Pages/Homes/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyOrders from "../Pages/DashBoards/MyOrders/MyOrders";
import AllBuyers from "../Pages/DashBoards/AllBuyers/AllBuyers";
import AddProduct from "../Pages/DashBoards/AddProduct/AddProduct";
import MyProduct from "../Pages/DashBoards/MyProduct/MyProduct";
import Blogs from "../Pages/Blogs/Blogs";
import NoRute from "../Pages/NoRute/NoRute";
import AdminRoute from "./AdminRoute/AdminRoute";
import AllSellers from "../Pages/DashBoards/AllSellers/AllSellers";
import SellerRoute from "./SellerRoute/SellerRoute";
import Reported from "../Pages/DashBoards/Reported/Reported";
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
                loader: async ({ params }) => fetch(`https://assignment-server-12.vercel.app/categories/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '*',
                element: <NoRute></NoRute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <DashBoard></DashBoard>
            // },
            {
                path: '/dashboard/myorders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reported',
                element: <AdminRoute>  <Reported></Reported> </AdminRoute>

            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute> <MyProduct></MyProduct> </SellerRoute>
            }
        ]

    }
])
export default router