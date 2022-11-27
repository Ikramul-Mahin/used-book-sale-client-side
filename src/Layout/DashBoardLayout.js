import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hook/useAdmin';
import Header from '../Shared/Header/Header';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
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

                        <li><Link to="/dashboard/myorders">My Order</Link></li>

                        <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                        <li><Link to="/dashboard/myproduct">My Product</Link></li>
                        <li><Link to="/dashboard/allsellers">All Sellers</Link></li>




                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link to="/dashboard/reported">Reported</Link></li>

                            </>
                        }





                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;