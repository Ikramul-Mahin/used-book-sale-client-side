import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import AllBuyerTable from './AllBuyerTable';

const AllBuyers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-server-12.vercel.app/users/user')
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
    return (
        <div>
            <h2 className="text-3xl text-center">All Buyers</h2>
            <hr />
            <div>
                <AllBuyerTable
                    handleDelete={handleDelete}
                    users={users}
                ></AllBuyerTable>


            </div>

        </div>
    );
};

export default AllBuyers;