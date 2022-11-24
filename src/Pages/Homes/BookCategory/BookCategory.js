import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard/CategoryCard';

const BookCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
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