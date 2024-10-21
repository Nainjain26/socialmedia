import React from 'react';
import { FiArrowRightCircle } from "react-icons/fi";
import { GrStatusGood } from "react-icons/gr";

// Define the props interface
interface BoxProps {
  title: string;
  icon: JSX.Element;
  price: string;
}

const Box: React.FC<BoxProps> = ({ title, icon, price }) => {
  return (
    <div className='bg-white text-center rounded-3xl border shadow-xl my-2 hover:scale-105 duration-500 hover:bg-purple-100'>
      <div className='w-max py-5 px-5 flex flex-col justify-center items-center'>
        <div className='p-3 rounded-[50%] bg-orange-600 w-max'>
          <p className='text-2xl md:text-5xl text-white'>{icon}</p>
        </div>
        <h2 className='font-semibold text-sm md:text-xl pt-3 pb-4'>{title}</h2>
        <h2 className='text-xl md:text-4xl pb-3 text-orange-600 font-semibold'>{price}</h2>
        <p className='text-gray-600 pb-4'>Build Annually</p>
        <div>
          <button className="bg-blue-800 text-sm px-1 py-1 md:px-4 md:py-2 md:text-xl rounded-3xl text-white flex">
            Get Started <div className='p-1'><p>{<FiArrowRightCircle />}</p></div>
          </button>
        </div>
        <div className='pt-1 md:pt-4'>
          <div className='flex p-1 md:p-3'>
            <div className='pr-3 p-1'><p className='text-orange-600'>{<GrStatusGood />}</p></div>
            <p className='text-gray-600'> 25 Analytics Company</p>
          </div>
          <div className='flex p-1 md:p-3'>
            <div className='pr-3 p-1'><p className='text-orange-600'>{<GrStatusGood />}</p></div>
            <p className='text-gray-600'> Include Branded Report</p>
          </div>
          <div className='flex p-1 md:p-3'>
            <div className='pr-3 p-1'><p className='text-orange-600'>{<GrStatusGood />}</p></div>
            <p className='text-gray-600'> 300 Keywords for SEO</p>
          </div>
          <div className='flex p-1 md:p-3'>
            <div className='pr-3 p-1'><p className='text-orange-600'>{<GrStatusGood />}</p></div>
            <p className='text-gray-600'> 15 Social Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
