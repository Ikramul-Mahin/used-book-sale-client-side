import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCategory from '../ProductCategory/ProductCategory';

const CategoryProducts = () => {
    const products = useLoaderData()
    console.log(products.products)
    return (
        <div>
            <h2 className='text-center text-4xl py-5 ' >{products.name} Related Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-8'>
                {
                    products?.products.map((product, i) => <ProductCategory
                        key={products.i}
                        product={product}
                    ></ProductCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;