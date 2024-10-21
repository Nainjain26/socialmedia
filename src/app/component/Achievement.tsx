
import React from 'react'
import Client from './Client'
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineGppGood } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";





const Achievement = () => {
  return (
    <div className='max-w-[1240px] pt-8 md:pt-10 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 pl-2 md:relative'>
  <div className='col-span-1'>
    <p className="text-orange-500 font-semibold text-sm bg-orange-300 rounded-2xl w-max p-1 md:p-2">
      Achievement
    </p>
    <h1 className='text-xl md:text-4xl font-semibold pt-1 py-1 md:pt-4 md:pb-4'>
      Some Number Of Our <br /> Achievements
    </h1>
    <p className='text-gray-600 pb-4 text-sm md:text-lg lg:text-xl'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, 
      laborum! Consectetur dolores repudiandae minima accusamus quaerat 
      debitis accusantium praesentium, quibusdam?
    </p>
    <div>
      <button className="bg-blue-800 px-2 py-1 rounded-3xl text-sm md:text-lg lg:text-xl text-white">
        Read More
      </button>
    </div>
  </div>

  <div className='col-span-1 md:relative'>
    <div className='grid grid-cols-2 gap-4 z-10 md:absolute'>
      <Client icon={<FaPeopleGroup />} number={'3,460'} title={'Satisfied Client'} />
      <Client icon={<MdOutlineGppGood />} number={'8,550'} title={'Successful Campaign'} />
      <Client icon={<FaHandsHelping />} number={'180'} title={'Brands Joined'} />
      <Client icon={<FaPeopleRoof />} number={'85'} title={'Marketing Experts'} />
    </div>
  </div>

  <div className='hidden md:block h-[250px] w-[250px] lg:h-[300px] lg:w-[300px] rounded-full border border-black md:absolute right-16 lg:right-56 md:top-24'></div>
</div>

  )
}

export default Achievement
