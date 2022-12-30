import React from 'react';
import logo from '../assets/Blue And White Minimalist Modern Financial Company - Logo.png'
import { BsBriefcase, BsClipboardData, BsShieldCheck } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaChartLine, FaDatabase, FaRegHandshake, FaRegUserCircle } from 'react-icons/fa'
import { RiFileSettingsLine, RiSecurePaymentLine, RiShieldUserFill } from 'react-icons/ri'
import { HiOutlineArrowsRightLeft } from 'react-icons/hi2'
import { AiOutlineMail } from 'react-icons/ai'
import { BiError } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='top-0 sticky'>
            <div className='logo section p-3 bg-gray-200 bg-opacity-30 rounded-tr-xl rounded-tl-xl'>
                <img src={logo} alt="logo" className='w-full lg:h-24 h-16 mx-auto rounded-tl-lg rounded-tr-lg' />
                <p className='text-sm mt-1 text-center text-white'>Toll free: 9285492383</p>
            </div>
            <div className='w-full p-2 mx-auto mt-2 bg-gray-300 bg-opacity-30 flex flex-col gap-y-2'>

                <NavLink to='/dashboard' className={({ isActive }) => isActive ? "scale-105 bg-secondary rounded-lg" : "scale-100"}>
                    <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsClipboardData className='lg:w-5 lg:h-5'></BsClipboardData> <span>Dashboard</span></h1>
                </NavLink>
                <NavLink to='/clients' className={({ isActive }) => isActive ? "scale-105 bg-secondary rounded-lg" : "scale-100"}>
                    <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><FaRegUserCircle className='lg:w-5 lg:h-5'></FaRegUserCircle> <span>Clients</span></h1>
                </NavLink>
                <NavLink to='/folio' className={({ isActive }) => isActive ? "scale-105 bg-secondary rounded-lg" : "scale-100"}>
                    <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsBriefcase className='lg:w-5 lg:h-5'></BsBriefcase> <span>Folio Lookup</span></h1>
                </NavLink>
                <NavLink to='/invest' className={({ isActive }) => isActive ? "scale-105 bg-secondary rounded-lg" : "scale-100"}>
                    <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><FaDatabase className='lg:w-5 lg:h-5'></FaDatabase> <span>Invest Online</span></h1>
                </NavLink>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><IoSettingsOutline className='lg:w-5 lg:h-5'></IoSettingsOutline> <span>Utilities</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><HiOutlineArrowsRightLeft className='lg:w-5 lg:h-5'></HiOutlineArrowsRightLeft> <span>Transactions view</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BsShieldCheck className='lg:w-5 lg:h-5'></BsShieldCheck> <span>Insurance</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><FaChartLine className='lg:w-5 lg:h-5'></FaChartLine> <span>Business Analysis </span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><RiFileSettingsLine className='lg:w-5 lg:h-5'></RiFileSettingsLine> <span>Data Management </span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><AiOutlineMail className='lg:w-5 lg:h-5'></AiOutlineMail> <span>Email Scheduler</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><CgWebsite className='lg:w-5 lg:h-5'></CgWebsite> <span>Portfolio</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><FaRegHandshake className='lg:w-5 lg:h-5'></FaRegHandshake> <span>Brokerage</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><RiShieldUserFill className='lg:w-5 lg:h-5'></RiShieldUserFill> <span>Portfolio Screener</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><BiError className='lg:w-5 lg:h-5'></BiError> <span>Risk Profiling</span></h1>
                <h1 className='bg-white bg-opacity-70 pl-3 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-start items-center gap-2 cursor-pointer'><RiSecurePaymentLine className='lg:w-5 lg:h-5'></RiSecurePaymentLine> <span>Billing</span></h1>

            </div>
        </div>
    );
};

export default Sidebar;