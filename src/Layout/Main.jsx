import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Navbar/Sidebar';
import SidebarTwo from '../Navbar/SidebarTwo';

const Main = () => {
    return (
        <div className='flex lg:gap-x-3 gap-x-2 justify-center'>
            <div className='w-1/4 md:block hidden'>
                <Sidebar></Sidebar>
            </div>
            <div className='w-[20%] md:hidden block'>
                <SidebarTwo></SidebarTwo>
            </div>
            <div className='w-full bg-slate-300 bg-opacity-30 rounded-tr-xl rounded-tl-xl p-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;