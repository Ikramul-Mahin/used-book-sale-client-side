import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import MyProductCard from '../MyProductCard/MyProductCard';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div >
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    products.map(product => <MyProductCard
                        product={product}
                        key={product._id}
                    ></MyProductCard>)
                }
            </div>


        </div>
    );
};

export default MyProduct;