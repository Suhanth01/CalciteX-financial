import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const SecondRow = () => {
    return (
        <div>
            <div>
                <div className="overflow-x-auto bg-white rounded-xl p-4">
                    <div className='flex justify-between items-center my-2'>
                        <div className='flex justify-start gap-x-10 items-center'>
                            <h1 className='text-xl font-semibold'>Business Update</h1>
                            <select className=' border-2 border-primary py-1 px-3 rounded-lg'>
                                <option value="2022">This Month</option>
                                <option value="2022">This Year</option>
                                <option value="2022">Last year</option>
                            </select>
                        </div>
                        <p className='text-primary flex justify-center items-center gap-x-2'>view more <FaArrowAltCircleRight></FaArrowAltCircleRight></p>
                    </div>
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>

                                <th></th>
                                <th>Dept</th>
                                <th>Equity</th>
                                <th>Hybrid</th>
                                <th>Liquid</th>
                                <th>Arbitrage</th>
                                <th>Other</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td className=' font-semibold'>Investment</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
                            </tr>
                            <tr>

                                <td className=' font-semibold'>Redemption</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td>Purple</td>
                                <td>12/5/2020</td>
                                <td>Purple</td>
                            </tr>
                            <tr>

                                <td className=' font-semibold'>Net Investment</td>
                                <td>Tax Accountant</td>
                                <td>Carroll Group</td>
                                <td>China</td>
                                <td>8/15/2020</td>
                                <td>Red</td>
                                <td>8/15/2020</td>
                                <td>Red</td>
                            </tr>


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default SecondRow;