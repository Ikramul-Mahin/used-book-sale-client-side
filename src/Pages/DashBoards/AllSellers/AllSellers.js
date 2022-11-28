import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';

const AllSellers = () => {
    const { user } = useContext(AuthContext)

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users', user?.role],
        queryFn: async () => {
            const res = await fetch(`https://assignment-server-12.vercel.app/users/seller`, {
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Veryfied</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>



    );
};

export default AllSellers;