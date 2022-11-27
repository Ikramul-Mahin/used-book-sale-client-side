import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Loading from '../../component/Loading/Loading';
import { AuthContext } from '../../context/AuthProvider';
import useSeller from '../../hook/useSeller';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const [isSeller, isSellerLoading] = useSeller(user?.email)

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }
    if (user && isSeller) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;