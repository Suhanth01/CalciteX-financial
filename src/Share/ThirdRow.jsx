import React from 'react';

const ThirdRow = () => {
    return (
        <div className='grid lg:grid-cols-5 grid-cols-1 gap-5'>
            <div className="overflow-x-auto bg-white rounded-xl p-4 col-span-3">
                <div className='flex justify-end gap-x-16 m-2'>
                    <p className='font-semibold'>Last Transaction Date</p>
                    <p className='font-semibold'>Credentials Status</p>
                </div>
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Dept</th>
                            <th>Equity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=' font-semibold'>Investment</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                        </tr>
                        <tr>
                            <td className=' font-semibold'>Redemption</td>
                            <td>Desktop Support Technician</td>
                            <td>Zemlak, Daniel and Leannon</td>
                        </tr>
                        <tr>
                            <td className=' font-semibold'>Net Investment</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                        </tr>
                        <tr>
                            <td className=' font-semibold'>Net Investment</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='col-span-2 w-full flex flex-col gap-y-5'>
                <div className='bg-white p-4 rounded-xl'>
                    <h1 className='font-semibold my-2'>Compliance</h1>
                    <div className='flex justify-between shadow-lg shadow-gray-300 py-1 my-3 px-2 rounded-lg'>
                        <p className='font-semibold '>Email Id Missing</p>
                        <p className='font-semibold text-secondary'>1712</p>
                    </div>
                    <div className='flex justify-between my-1 shadow-lg shadow-gray-300 py-1 px-2 rounded-lg'>
                        <p className='font-semibold '>Email Id Missing</p>
                        <p className='font-semibold text-secondary'>1155</p>
                    </div>
                </div>
                <div className='bg-accent p-4 rounded-xl'>
                    <h1 className='font-semibold my-2'>Compliance</h1>
                    <div className='flex justify-between shadow-lg bg-white shadow-gray-300 py-1 my-3 px-2 rounded-lg'>
                        <p className='font-semibold '>Email Id Missing</p>
                        <p className='font-semibold text-secondary'>1712</p>
                    </div>
                    <div className='flex justify-between my-1 bg-white shadow-lg shadow-gray-300 py-1 px-2 rounded-lg'>
                        <p className='font-semibold '>Email Id Missing</p>
                        <p className='font-semibold text-secondary'>1155</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdRow;