import React from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

// Define the props interface
interface Footer2Props {
  title: string;
  heading1: string;
  heading2: string;
  heading3: string;
  heading4: string;
  heading5: string;
}

const Footer2: React.FC<Footer2Props> = ({ title, heading1, heading2, heading3, heading4, heading5 }) => {
  return (
    <div>
      <div className='px-3 py-4 md:px-7 md:py-8'>
        <h1 className='md:text-2xl text-white font-semibold'>{title}</h1>
        <div className='flex pt-1 md:pt-3'>
          <div className='text-sm md:text-2xl text-orange-600 pr-1 md:pr-3'>{<FaAngleRight />}</div>
          <div className='text-sm md:text-xl text-gray-500'>
            <Link href="/">{heading1}</Link>
          </div>
        </div>

        <div className='flex pt-1 md:pt-3'>
          <div className='text-sm md:text-2xl text-orange-600 pr-3'>{<FaAngleRight />}</div>
          <div className='text-sm md:text-2xl text-gray-500'>
            <Link href="/about-us">{heading2}</Link>
          </div>
        </div>

        <div className='flex pt-1 md:pt-3'>
          <div className='text-sm md:text-2xl text-orange-600 pr-3'>{<FaAngleRight />}</div>
          <div className='text-sm md:text-2xl text-gray-500'>
            <Link href="/services">{heading3}</Link>
          </div>
        </div>

        <div className='flex pt-1 md:pt-3'>
          <div className='text-sm md:text-2xl text-orange-600 pr-3'>{<FaAngleRight />}</div>
          <div className='text-sm md:text-2xl text-gray-500'>
            <Link href="/projects">{heading4}</Link>
          </div>
        </div>

        <div className='flex pt-1 md:pt-3'>
          <div className='text-sm md:text-2xl text-orange-600 pr-3'>{<FaAngleRight />}</div>
          <div className='text-sm md:text-2xl text-gray-500'>
            <Link href="/contact">{heading5}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
