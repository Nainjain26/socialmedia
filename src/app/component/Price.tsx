import React from 'react'
import { MdLockPerson } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdFindInPage } from "react-icons/md";

import Box from './Box';


const Price = () => {
  return (
<div className='p-5 md:p-32'>
      <div className=' text-center  flex justify-center'>
       <div className=''><p className="text-orange-500 font-semibold text-sm text-center w-max  bg-orange-300 rounded-2xl mx-auto p-1 md:p-2">
          Our Prices
        </p>  
        <h1 className=" text-2xl md:text-4xl font-semibold pt-2 pb-2 md:pt-5 md:pb-5">
          We provide the best services for you
        </h1>
        <p className="text-gray-700 text-sm pb-1 md:pb-5 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, atque suscipit <br /> minima quos quibusdam impedit eaque unde aperiam obcaecati eos?</p>
     </div>
    </div>
      <div className='max-w-[1240px]   mx-auto   md:md:grid grid-cols-3 gap-4 items-center justify-items-center' >
       <Box price={'$49.5'} title={'personal plan'} icon={<MdLockPerson/>}/>
       <Box price={'$149.49'} title={'Enterprises plan'} icon={<FaBuildingColumns/>}/>
       <Box price={'$89.90'} title={'Business plan'} icon={<MdFindInPage/>}/>
      </div>
</div>
  )
}

export default Price
