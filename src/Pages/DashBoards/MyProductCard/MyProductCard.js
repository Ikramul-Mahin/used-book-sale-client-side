import React from 'react';


const MyProductCard = ({ product, handleDelete }) => {
    const { bookname, location, bookimage, posteddate, price, OriginalPrice, sellerName, usedyear, _id } = product



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
                <div className='pb-4 flex  '>
                    <div>
                        <button className='btn btn-sm w-32 text-right bg-cyan-700 ' >Advertise</button>
                    </div>
                    <div className="badge badge-secondary p-4 ml-24">
                        <p>Available</p>
                    </div>

                </div>
                <div>
                    <button className='btn btn-sm btn-warning btn-btn-warning' onClick={() => handleDelete(_id)} >Delete Product</button>
                </div>


            </div>
        </div>
    );
};

export default MyProductCard;