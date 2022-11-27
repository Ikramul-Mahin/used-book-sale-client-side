import React from 'react';

const MyProductCard = ({ product }) => {
    const { bookname, location, bookimage, posteddate, price, OriginalPrice, sellerName, usedyear } = product


    return (
        <div>
            <div className="card  bg-base-100 shadow-xl my-5">
                <figure><img className='h-80 w-full' src={bookimage} alt="Shoes" /></figure>
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
                    </div>
                </div>

                {/* <label htmlFor="product-modal" className='btn bg-cyan-700' >Advertise</label> */}
                <div className='pb-4 '>
                    <button className='btn w-32 text-right bg-cyan-700 ' >Advertise</button>
                    <div className="badge badge-secondary p-4 ml-24">
                        <p>Available</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyProductCard;