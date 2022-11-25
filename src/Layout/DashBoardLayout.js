import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Header from '../Shared/Header/Header';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                        <li><Link to="/dashboard/myorders">My Order</Link></li>
                        <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        <li><Link to="/dashboard/myproduct">My Product</Link></li>

                        {/* {
                            user?.purpose &&
                            <>
                                <li><Link to="/addproduct">Add A Product</Link></li>
                                <li><Link to="/myproduct">My Product</Link></li>

                            </>
                        } */}


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;