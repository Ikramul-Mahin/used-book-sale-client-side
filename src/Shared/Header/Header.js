import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png'
import { AuthContext } from '../../context/AuthProvider';
const Header = () => {
    const { user, userSignOut } = useContext(AuthContext)
    console.log(user)
    const handleSignOut = () => {
        toast.success('successfully log out')
        userSignOut()
            .then(() => {

            })
            .catch(err => console.log(err))
    }
    const menuItems = <React.Fragment>
        <li> <Link to='/' >Home</Link> </li>
        <li> <Link to='/blogs' >Blogs</Link> </li>
        {
            user?.uid ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link onClick={handleSignOut}>SignOut</Link></li>
                </>

                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li> <Link to='/signup' >SignUp</Link> </li>

                </>

        }


    </React.Fragment>
    return (
        <div className="navbar text-white bg-cyan-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-cyan-700 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"> <img src={logo} className='w-10' alt="" />   Used-Book | Sale</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;