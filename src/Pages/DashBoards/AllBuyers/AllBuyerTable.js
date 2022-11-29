import React from 'react';

const AllBuyerTable = ({ users, handleDelete }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => { handleDelete(user?._id) }} className='btn btn-sm  bg-red-700'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyerTable;