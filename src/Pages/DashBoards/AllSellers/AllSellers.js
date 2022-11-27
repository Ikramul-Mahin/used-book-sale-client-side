import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';

const AllSellers = () => {
    const { user } = useContext(AuthContext)

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users', user?.role],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=${user?.role}`, {
                headers: {
                    authorization: `bearer${localStorage.getItem('accessToken')}`
                }

            })
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Allsellers</h2>
            <p>sellers:{users.length}</p>


        </div>
    );
};

export default AllSellers;