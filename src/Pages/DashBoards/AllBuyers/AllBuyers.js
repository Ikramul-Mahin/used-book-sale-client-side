import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-server-12.vercel.app/users/user')
            const data = await res.json()
            return data
        }
    })
    const handleMakeAdmin = id => {
        fetch(`https://assignment-server-12.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `berer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('successfully make admin')
                    refetch()
                }
            })
    }
    return (
        <div>
            <div>
                <h2 className="text-3xl text-center">All Buyers</h2>
                <hr />
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><button className='btn btn-sm  bg-red-700'>Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllBuyers;