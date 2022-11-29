import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Reported = () => {
    const { data: reports = [], isLoading } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch('https://assignment-server-12.vercel.app/reports')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <div>
                <h2 className="text-3xl  text-center py-4">Reports</h2>
                <hr />

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Reports</th>

                            </tr>
                        </thead>
                        <tbody>
                            {reports &&
                                reports?.map((report, i) => <tr key={report._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        {report.name}
                                    </td>
                                    <td>{report.email}</td>
                                    <td>{report?.report}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default Reported;