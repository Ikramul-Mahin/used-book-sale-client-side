import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [], isLoading } = useQuery({
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
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <h2 className="text-3xl  text-center py-4">My Orders</h2>
                <hr />

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Book Title</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings &&
                                bookings?.map((booking, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        {booking.name}
                                    </td>
                                    <td>{booking.email}</td>
                                    <td>{booking?.bookname}</td>
                                    <td> <button className='btn btn-sm bg-green-600'>Pay </button> </td>
                                    {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyOrders;