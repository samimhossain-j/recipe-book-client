import React from 'react';
import error from '../assets/error.png'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Error = () => {
    return (
       <div>
        <Navbar></Navbar>
         <div className='flex justify-center items-center'>
            <img src={error} alt="" />
        </div>
        <Footer></Footer>

       </div>
    );
};

export default Error;