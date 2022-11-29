import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';
import MyOrderTable from './MyOrderTable';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assignment-server-12.vercel.app/bookings?email=${user?.email}`, {
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

            fetch(`https://assignment-server-12.vercel.app/bookings/${id}`, {
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
            <h2 className="text-3xl  text-center py-4">My Orders</h2>
            <hr />
            <div>
                <MyOrderTable
                    bookings={bookings}
                    handleDelete={handleDelete}
                ></MyOrderTable>


            </div>

        </div>
    );
};

export default MyOrders;