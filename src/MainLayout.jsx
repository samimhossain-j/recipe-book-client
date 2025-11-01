import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const MainLayout = () => {
    return (
        <div className='bg-green-100 min-w-screen'>
            <Navbar></Navbar>
            <div className=' p-10 '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;