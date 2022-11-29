import React from 'react';

const MyOrderTable = ({ bookings, handleDelete }) => {

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Book Title</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>
                                    {booking.name}
                                </td>
                                <td>{booking.email}</td>
                                <td>{booking?.bookname}</td>
                                <td> <button className='btn btn-sm bg-green-600'>Pay </button> </td>
                                <td> <button onClick={() => { handleDelete(booking?._id) }} className='btn btn-sm bg-red-700'>Delete </button> </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrderTable;