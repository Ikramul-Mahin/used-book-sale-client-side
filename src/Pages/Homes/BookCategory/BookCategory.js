import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../../component/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';
import CategoryCard from './CategoryCard/CategoryCard';

const BookCategory = () => {
    const { user, loading } = useContext(AuthContext)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://assignment-server-12.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='pt-10'>
            <h2 className='text-4xl text-gray-600 font-semibold text-center py-8'>Book Category</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-6 w-full'>


                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }

            </div>

        </div>
    );
};

export default BookCategory;