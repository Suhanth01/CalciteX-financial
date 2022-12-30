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
const SidebarTwo = () => {
    return (
        <div>
            <div className='logo section p-2 bg-gray-200 bg-opacity-30 rounded-tr-lg rounded-tl-lg'>
                {/* ===============logo section ================== */}
                <img src={logo} alt="logo" className='w-full h-10 mx-auto rounded-tl-lg rounded-tr-lg' />
            </div>
            <div className='w-full p-2 mx-auto mt-2 bg-gray-300 bg-opacity-30 flex flex-col gap-y-2'>
                <NavLink to='/dashboard' className={({ isActive }) => isActive ? "scale-105 bg-secondary rounded-lg" : "scale-100"}>
                    <h1 data-tip="Dashboard" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><BsClipboardData className='lg:w-5 lg:h-5'></BsClipboardData></h1>
                </NavLink>

                <NavLink to='/clients' className={({ isActive }) => isActive ? "scale-105 bg-secondary rounded-lg" : "scale-100"}>
                    <h1 data-tip="Client" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><FaRegUserCircle className='lg:w-5 lg:h-5'></FaRegUserCircle></h1>
                </NavLink>

                <NavLink to='/folio' className={({ isActive }) => isActive ? "scale-105 bg-secondary rounded-lg" : "scale-100"}>
                    <h1 data-tip="Folio lookup" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><BsBriefcase className='lg:w-5 lg:h-5'></BsBriefcase></h1>
                </NavLink>
                <NavLink to='/invest' className={({ isActive }) => isActive ? "scale-105 bg-secondary rounded-lg" : "scale-100"}>
                    <h1 data-tip="Invest Online" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><FaDatabase className='lg:w-5 lg:h-5'></FaDatabase></h1>
                </NavLink>

                <h1 data-tip="Utilities" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><IoSettingsOutline className='lg:w-5 lg:h-5'></IoSettingsOutline></h1>
                <h1 data-tip="Transactions view" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><HiOutlineArrowsRightLeft className='lg:w-5 lg:h-5'></HiOutlineArrowsRightLeft> </h1>
                <h1 data-tip="Insurance" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><BsShieldCheck className='lg:w-5 lg:h-5'></BsShieldCheck></h1>
                <h1 data-tip="Business Analysis" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><FaChartLine className='lg:w-5 lg:h-5'></FaChartLine></h1>
                <h1 data-tip="Data Management" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><RiFileSettingsLine className='lg:w-5 lg:h-5'></RiFileSettingsLine></h1>
                <h1 data-tip="Email schedular" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><AiOutlineMail className='lg:w-5 lg:h-5'></AiOutlineMail></h1>
                <h1 data-tip="Portfolio" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><CgWebsite className='lg:w-5 lg:h-5'></CgWebsite></h1>
                <h1 data-tip="Brokerage" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><FaRegHandshake className='lg:w-5 lg:h-5'></FaRegHandshake></h1>
                <h1 data-tip="Portfolio screener" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><RiShieldUserFill className='lg:w-5 lg:h-5'></RiShieldUserFill></h1>
                <h1 data-tip="Risk Profiling" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><BiError className='lg:w-5 lg:h-5'></BiError></h1>
                <h1 data-tip="Billing" className='tooltip tooltip-right tooltip-secondary bg-white bg-opacity-70 p-2 py-1 text-center rounded-lg font-semibold hover:scale-105 hover:bg-gray-100 duration-300 flex flex-row justify-center items-center gap-2 cursor-pointer'><RiSecurePaymentLine className='lg:w-5 lg:h-5'></RiSecurePaymentLine></h1>
            </div>
        </div>
    );
};

export default SidebarTwo;