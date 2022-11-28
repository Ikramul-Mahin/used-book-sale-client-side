import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';
import MyProductCard from '../../DashBoards/MyProductCard/MyProductCard';
import ProductCategory from '../BookCategory/CategoryCard/ProductCategory/ProductCategory';
import ProductModal from '../BookCategory/CategoryCard/ProductCategory/ProductModal';

const LatestCollection = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [], isLoading } = useQuery({
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
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center text-4xl font-bold my-8'>Our Latest Books Collection</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    products.map(product => <ProductCategory
                        product={product}
                        key={product._id}
                    ></ProductCategory>)
                }
            </div>
            <div>
                <ProductModal
                    products={products}
                ></ProductModal>
            </div>

            {
                products.length === 0 && <div>
                    <p className='text-center text-5xl p-10 font-semibold'>No items Available</p>
                </div>
            }
        </div>
    );
};

export default LatestCollection;