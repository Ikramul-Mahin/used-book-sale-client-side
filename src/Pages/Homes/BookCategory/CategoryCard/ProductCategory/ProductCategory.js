import React from 'react';

const ProductCategory = ({ product }) => {

    const { bookname, location, bookimg, posteddate, price, OriginalPrice, sellerName, usedyear } = product

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl my-5">
                <figure><img className='h-80 w-full' src={bookimg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookname}
                        <div className="badge badge-secondary">NewPrice:{price}</div>
                    </h2>
                    <div className='py-4'>
                        <p className='text-lg font-medium'>Seller:{sellerName}</p>
                        <p className='text-lg font-medium'>Location:{location}</p>
                        <p className='text-lg font-medium'>Used:{usedyear} year</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Date:{posteddate}</div>
                        <div className="badge badge-outline">OldPrice:{OriginalPrice}</div>
                        <div title='Click to report about book.' className="badge badge-warning p-2"> <button className='text-md py-2 px-4'>Report</button> </div>
                    </div>
                </div>
                <label htmlFor="product-modal" className='btn bg-cyan-700' >Book Now</label>



            </div>
        </div>
    );
};

export default ProductCategory;