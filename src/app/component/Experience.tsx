import React from 'react'
import Image from "next/image";
// import
import img from "./image/image-from-rawpixel-id-15237963-png.png"
import { GrStatusGood } from 'react-icons/gr'

const Experience = () => {
  return (
    <div className='max-w-[1240px]  p-2 mx-auto my-10 md:grid grid-cols-2'>
       <div className="relative h-[250px] w-[290px] md:h-[350px] md:w-[390px]">
        <Image className=""
          src={img}
          alt="Example Image"
          // width={400} 
        
          // height={500} 
        />
      <div className=' h-[290px] w-[290px] md:h-[430px] md:w-[430px] rounded-[50%] bg-purple-500  z-[-1] absolute top-11 left-auto '></div>
      </div>
      <div className='col-span-1 max-md:pt-32'>
      <p className="text-orange-500 font-semibold text-sm bg-orange-300 rounded-2xl  w-max  md:text-xl p-1 md:p-2">
          About socialzy
        </p>
        <h1 className="text-xl font-semibold pt-1 pb-1 md:text-4xl md:pt-5 md:pb-5">
         15 Years Of Experience <br />In Social Media Marketing
        </h1>
        <p className="text-gray-600 text-sm p-2 md:text-xl md:pb-5">
        Over the past 15 years, we’ve built a loyal community of users <br /> who trust us for their social interactions.
        </p>
       <div className='flex  hover:bg-purple-300 hover:p-2 hover:rounded-full'>
        <div className='p-1 md:p-3'><p className='text-xl text-purple-500 p-2 md:p-4 shadow-xl	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);  bg-white rounded-[50%]'>{<GrStatusGood/>}</p></div>
       <div> <h2 className='font-semibold text-sm md:text-xl'> Optimization Engine Rank</h2>
        <p className="text-gray-600 text-sm md:text-xl md:pb-5">Ensure your site is mobile-friendly,secure (HTTPS), and has a clear sitemap.</p></div>
       </div>
       <div className='flex  hover:bg-purple-300 hover:p-2 hover:rounded-full'>
        <div className='p-1 md:p-3'><p className='text-xl text-purple-500 p-2 md:p-4 shadow-xl	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);  bg-white rounded-[50%]'>{<GrStatusGood/>}</p></div>
       <div> <h2 className='font-semibold text-sm md:text-xl'> Listen & Engage With Followers</h2>
        <p className="text-gray-600  text-sm md:text-xl md:pb-5">We prioritize listening to your feedback to continuously improve the user experience.</p></div>
       </div>
       <div className='flex  hover:bg-purple-300 hover:p-2 hover:rounded-full'>
        <div className='p-1 md:p-3'><p className='text-xl text-purple-500 p-2 md:p-4 shadow-xl	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);  bg-white rounded-[50%]'>{<GrStatusGood/>}</p></div>
       <div> <h2 className='font-semibold text-sm md:text-xl'>Higher Customer Satisfaction</h2>
        <p className="text-gray-600  text-sm md:text-xl md:pb-5">Our 24/7 customer service ensures that any issues are resolved quickly and effectively.</p></div>
       </div>
      </div>
    </div>
  )
}

export default Experience

