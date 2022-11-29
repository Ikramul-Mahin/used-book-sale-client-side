import React from 'react';

const AllSellerTable = ({ users, handleDelete }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td> <button className='btn btn-sm bg-cyan-700'> Verify</button> </td>
                                <td> <button onClick={() => { handleDelete(user?._id) }} className='btn btn-sm bg-red-700'> Delete</button> </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellerTable;