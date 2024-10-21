import React from 'react'
import { IoIosTimer } from 'react-icons/io'
import { FaRupeeSign } from 'react-icons/fa'
import { GiLightBulb } from 'react-icons/gi'
import { FaQuestion } from 'react-icons/fa'

const Card = () => {
  return (
    <div className='max-w-[1240px] pt-5 pb-5 md:pt-24 md:pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto items-center'>
  
  {/* Why Choose Us */}
  <div className='text-white bg-blue-950 hover:bg-orange-600 hover:rounded-3xl  p-4  md:rounded-tl-[40px] md:rounded-bl-[40px] hover:scale-105 duration-150'>
    <p className='text-xl md:text-3xl text-orange-600 pb-2'><FaQuestion /></p>
    <h2 className='font-semibold text-xl md:text-xl pb-2'>Why Choose Us</h2>
    <p className='text-start text-gray-400 text-sm md:text-xl w-full md:w-56'>
      We provide a seamless and intuitive user experience, ensuring that you can connect, share, and engage .
    </p>
  </div>

  {/* Save Your Time */}
  <div className='text-white bg-blue-950 hover:bg-orange-600 hover:rounded-3xl  p-4  hover:scale-105 duration-150'>
    <p className='text-xl md:text-3xl text-orange-600 pb-2'><IoIosTimer /></p>
    <h2 className='font-semibold text-xl md:text-xl pb-1'>Save Your Time</h2>
    <p className='text-start text-gray-400 text-sm md:text-xl w-full md:w-56'>
      We’re here when you need us. Enjoy 24/7 customer support for any technical or account-related queries.
    </p>
  </div>

  {/* Affordable Price for You */}
  <div className='text-white bg-blue-950 hover:bg-orange-600 hover:rounded-3xl  p-4  hover:scale-105 duration-150'>
    <p className='text-xl md:text-3xl text-orange-600 pb-2'><FaRupeeSign /></p>
    <h2 className='font-semibold text-xl md:text-xl pb-2'>Affordable Price for You</h2>
    <p className='text-start text-gray-400 text-sm md:text-xl w-full md:w-56'>
      Get premium features without breaking the bank. Our plans are designed to suit every budget.
    </p>
  </div>

  {/* Best Strategy */}
  <div className='text-white bg-blue-950 hover:bg-orange-600 hover:rounded-3xl  p-4 md:rounded-tr-[40px] md:rounded-br-[40px]  hover:scale-105 duration-150 '>
    <p className='text-xl md:text-3xl text-orange-600 pb-2'><GiLightBulb /></p>
    <h2 className='font-semibold text-xl md:text-xl pb-2'>Best Strategy</h2>
    <p className='text-start text-gray-400 text-sm md:text-xl w-full md:w-56'>
      Whether you’re just starting or established, our platform supports you with tools to grow and content.
    </p>
  </div>
  
</div>

  )
}

export default Card
