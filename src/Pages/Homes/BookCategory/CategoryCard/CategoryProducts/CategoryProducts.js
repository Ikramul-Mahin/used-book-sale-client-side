import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../../../component/Loading/Loading';
import { AuthContext } from '../../../../../context/AuthProvider';
import ProductCategory from '../ProductCategory/ProductCategory';
import ProductModal from '../ProductCategory/ProductModal';

const CategoryProducts = () => {
    const { loading, user } = useContext(AuthContext)
    // const [product, setProduct] = useState(null)
    const products = useLoaderData()
    console.log('here', products)

    return (
        <div>
            <h2 className='text-center text-4xl py-5 ' >{products.name} Related Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-8'>
                {
                    products?.map((product) => <ProductCategory
                        key={product._id}
                        product={product}
                    // setProduct={setProduct}
                    ></ProductCategory>)
                }
            </div>
            <div>
                <ProductModal

                    // products={products}
                    product={products}
                // setProduct={setProduct}

                ></ProductModal>
            </div>
        </div>
    );
};

export default CategoryProducts;