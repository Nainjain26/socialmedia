import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";

import Footer2 from './Footer2';
import Socialmedia from './Socialmedia';

const Footer = () => {
  return (
    <div className='bg-blue-950 p-4 md:p-20'>
    <div className='max-w-[1240px] mx-auto pt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      
      {/* MediaPro Info Section */}
      <div className='bg-blue-900  w-max rounded-xl shadow-xl h-auto sm:h-[200px] md:h-[300px] p-4 md:p-8'>
        <div className="font-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-4xl">
          Media<span className="text-orange-600">P</span>ro
        </div>
        <div className='flex items-center pt-3 md:pt-10'>
          <div className='text-sm md:text-2xl text-orange-600 pr-3'>
            <FaLocationDot />
          </div>
          <div className='text-sm md:text-xl text-white'>Indore, 158</div>
        </div>
        <div className='flex items-center pt-3'>
          <div className='text-sm md:text-2xl text-orange-600 pr-3'>
            <IoMdMailUnread />
          </div>
          <div className='text-sm md:text-xl text-white'>mediapro@gmail.com</div>
        </div>
        <div className='flex items-center pt-3'>
          <div className='text-sm md:text-2xl text-orange-600 pr-3'>
            <IoCall />
          </div>
          <div className='text-sm md:text-xl text-white'>+789-545-556</div>
        </div>
      </div>
  
      {/* Footer Links Section 1 */}
      <div>
        <Footer2 
          title='Other Pages' 
          heading1='Home' 
          heading2='Services' 
          heading3='Projects' 
          heading4='Contact' 
          heading5='About Us' 
        />
      </div>
  
      {/* Footer Links Section 2 */}
      <div>
        <Footer2 
          title='Quick Links' 
          heading1='Privacy Policy' 
          heading2='Terms of Service' 
          heading3='Disclaimer' 
          heading4='Credits' 
          heading5='FAQ' 
        />
      </div>
  
      {/* Newsletter Section */}
      <div className='px-3 py-4 md:px-7 md:py-8'>
        <h1 className='text-xl md:text-2xl text-white font-semibold pb-3 md:pb-9'>Newsletter</h1>
        <input 
          type="text" 
          placeholder="Enter your email..." 
          className='p-2 md:p-3 rounded-2xl w-full'
        />
        <p className='text-gray-400 pt-2 md:pt-5'>Get the latest news & updates</p>
        <Socialmedia />
      </div>
  
    </div>
  </div>
  
  )
}

export default Footer
