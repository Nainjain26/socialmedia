import React from 'react'
// import { GiArabicDoor } from 'react-icons/gi'
// import Gallery from './Gallery'
// import imagedata1 from "./image/office-8828993_1280.jpg"
// import imagedata2 from "./image/telework-6795505_640.jpg"
// import imagedata3 from "./image/women-8080878_640.png"
// import imagedata4 from "./image/telework-6795505_640.jpg"



const Project = () => {
  return (
    <div className='bg-blue-950 relative'>
    {/* Section Content */}
    <div className='max-w-[1240px] p-6 md:p-12 lg:p-24 mx-auto'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
        {/* Left Side (Title and Description) */}
        <div className='mb-4 md:mb-0'>
          <p className="text-orange-500 font-semibold text-sm bg-orange-300 rounded-2xl w-max px-2 py-1">
            Our Project
          </p>
          <h1 className='text-white text-xl md:text-3xl lg:text-4xl pt-2'>
            Projects We Have Done
          </h1>
        </div>
  
        {/* Right Side (Description and Button) */}
        <div className='pt-4 md:pt-0'>
          <p className='text-gray-500 pb-3 text-sm md:text-base lg:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas alias
            suscipit, eos minima delectus hic soluta tenetur quae totam ullam pariatur dolorum perferendis omnis porro!
          </p>
          <button className="bg-blue-800 text-sm md:text-base lg:text-xl px-4 py-2 rounded-3xl text-white">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  
    {/* Project Gallery
    <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 '>
      <div><Gallery imgdata={imagedata1} /></div>
      <div><Gallery imgdata={imagedata2} /></div>
      <div><Gallery imgdata={imagedata3} /></div>
      <div><Gallery imgdata={imagedata4} /></div>
    </div> */}
  </div>
  
  )
}

export default Project
