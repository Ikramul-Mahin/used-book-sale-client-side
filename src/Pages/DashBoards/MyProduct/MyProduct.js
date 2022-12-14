import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';
import MyProductCard from '../MyProductCard/MyProductCard';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    // const { data: products = [], isLoading } = useQuery({
    //     queryKey: ['users', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(`https://assignment-server-12.vercel.app/products?email=${user?.email}`)
    //         const data = await res.json()
    //         return data
    //     }
    // })
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assignment-server-12.vercel.app/bookcategories?email=${user?.email}`, {
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

            fetch(`https://assignment-server-12.vercel.app/bookcategories/${id}`, {
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
        <div >
            <h2 className='text-center text-4xl'>My Product</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    products.map(product => <MyProductCard
                        product={product}
                        key={product._id}
                        handleDelete={handleDelete}

                    ></MyProductCard>)
                }
            </div>


        </div>
    );
};

export default MyProduct;