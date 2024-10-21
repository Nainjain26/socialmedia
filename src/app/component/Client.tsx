import React from 'react'

const Client = ({icon,number,title}) => {
  return (
    
    <div className='bg-orange-200 rounded-xl border shadow-xl h-[200px] my-2 md:hover:scale-105 duration-500 '>
         <div className='px-6 py-10 flex flex-col justify-center items-center'>
          <p className='text-5xl text-black pb-4'>{icon }</p>
          <h2 className='font-semibold text-xl  pb-4'>{number} <span className='text-orange-600'>+</span></h2>
          <p className='text-start font-semibold text-gray-600'>{title}</p>
         </div> 
    </div>
  )
}

export default Client