import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Loading from '../../component/Loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hook/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;