import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';
import AllSellerTable from './AllSellerTable';

const AllSellers = () => {
    const { user } = useContext(AuthContext)

    const { data: users = [], isLoading, refetch } = useQuery({
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
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure u want to confirm!')
        if (proceed) {

            fetch(`https://assignment-server-12.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Successfully deleted')
                        refetch()
                    }

                })
        }
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <AllSellerTable
                users={users}
                handleDelete={handleDelete}
            ></AllSellerTable>
        </div>



    );
};

export default AllSellers;