import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Animated from '../Share/Animated';
import CardAndCharts from '../Share/CardAndCharts';
import TableAndChart from '../Share/TableAndChart';

const DashboardTwo = () => {
    return (
        <div>
            <Link to='/'>
                <button className='bg-red-500 text-gray-100 py-1 px-4 rounded-lg flex justify-center items-center my-3 ml-4 gap-2'><FaHome></FaHome> Home</button>
            </Link>
            <Animated></Animated>
            <CardAndCharts></CardAndCharts>
            <TableAndChart></TableAndChart>
        </div>
    );
};

export default DashboardTwo;