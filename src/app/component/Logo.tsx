import React from 'react'
import { FaHouseFloodWater } from "react-icons/fa6";
import { GiGreatPyramid } from "react-icons/gi";
import { GoNorthStar } from "react-icons/go";
import { ImSpinner9 } from "react-icons/im";

const Logo = () => {
  return (

    <div className='max-w-[1240px] pt-4 md:pt-60 md:pb-14 mx-auto my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6'>
   
    <div className='flex items-center space-x-4'>
      <div className='text-3xl sm:text-4xl md:text-5xl text-green-400'>
        <FaHouseFloodWater />
      </div>
      <h1 className='text-lg sm:text-xl md:text-3xl p-2'>
        <span className='text-green-400'>The</span> Develop
      </h1>
    </div>
  
   
    <div className='flex items-center space-x-4'>
      <div className='text-3xl sm:text-4xl md:text-5xl text-purple-400'>
        <GiGreatPyramid />
      </div>
      <h1 className='text-lg sm:text-xl md:text-3xl p-2 text-purple-400'>
        Pyramida
      </h1>
    </div>
  
    
    <div className='flex items-center space-x-4'>
      <div className='text-3xl sm:text-4xl md:text-5xl text-orange-500'>
        <GoNorthStar />
      </div>
      <h1 className='text-lg sm:text-xl md:text-3xl p-2 text-gray-600'>
        StarScraft
      </h1>
    </div>
  
   
    <div className='flex items-center space-x-4'>
      <div className='text-3xl sm:text-4xl md:text-5xl text-purple-300'>
        <ImSpinner9 />
      </div>
      <h1 className='text-lg sm:text-xl md:text-3xl p-2 text-purple-300'>
        Elegantier
      </h1>
    </div>
  </div>
  
 
  )
}

export default Logo
