import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PieCharts from '../Share/PieCharts';
import SecondRow from '../Share/SecondRow';
import ThirdRow from '../Share/ThirdRow';


const Dashboard = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto flex lg:flex-row flex-col justify-between relative items-center gap-y-2'>
                <input type="text" className='bg-white text-gray-700 lg:py-2 py-1  lg:px-4 px-2 lg:w-1/2 w-full rounded-xl' placeholder='Clients search here...' />
                <BsSearch className='lg:w-6 lg:h-6 w-4 h-4 text-gray-400 absolute top-2 lg:left-[46%] left-48'></BsSearch>


                <select className='flex lg:w-1/5 w-ful lg:py-2 py-1 p-2 text-gray-400 rounded-xl'>
                    <option value="Portfolio validation">Validation</option>
                    <option value="Portfolio validation">Look up</option>
                    <option value="Portfolio validation">Admin</option>
                    <option value="Portfolio validation">server</option>
                </select>

                <Link to='/dashboardTwo' className='bg-primary lg:py-2 py-1 lg:px-5 px-2 rounded-xl lg:w-1/5 w-full text-white font-semibold'>
                    <button >Go to report</button>
                </Link>

            </div>

            {/* chart section row 2  */}

            <div className='my-5'>
                <div className='lg:p-4 p-1 rounded-xl'>
                    <PieCharts></PieCharts>
                </div>
            </div>
            <div className='lg:my-6 my-3'>
                <SecondRow></SecondRow>
            </div>
            <div>
                <ThirdRow></ThirdRow>
            </div>
        </div>
    );
};

export default Dashboard;