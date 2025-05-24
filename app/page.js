"use Client"
import React from 'react'
import { ToastContainer,} from 'react-toastify';

import Navbar from '@/Components/Navbar'
import Contain from '@/Components/Contain'
import Review from '@/Components/Review'
import About from '@/Components/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Agent from '@/app/Agent'





const page = () => {
  return (
    <>
    
    <ToastContainer/>
    <Contain/>
    <About/>
    <Review/>
    

    <div>
     
      </div>
    </>
  )
}

export default page