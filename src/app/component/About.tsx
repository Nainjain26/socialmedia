import React from 'react'
import Gallery from './Gallery'
import img from "./image/office-8828993_1280.jpg"
import { LuQuote } from "react-icons/lu";

const About = () => {
  return (
    <div className='bg-blue-950 pb-12'>
      <div className='max-w-[1240PX] mx-auto pt-4 md:pt-10 '>
      <div className=' flex-col pl-2 md:flex justify-between'>
        <div>
        <p className="text-orange-500 font-semibold text-sm bg-orange-300 rounded-2xl  w-max  px-2 py-1">
         Testmonials
        </p>
        <h1 className=' text-white text-xl md:text-4xl pt-1 md:pt-4'>What client says about <br /> socialzy </h1>
        </div>
        <div>
          <p className='text-gray-500 pb-3 text-sm md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit  Quas alias <br /> suscipit, eos minima delectus hic soluta tenetur  quae totam ullam pariatur <br />dolorum perferendis omnis porro !</p> 
        </div>
      </div>
    </div>
     <div className='max-w-[1240px] pl-2 mx-auto my-2 md:my-10 md:grid grid-cols-3'>
       <div className=''>
        <p className='text-gray-400 pb-1 md:pb-3'><span className='text-orange-600 text-xl md:text-2xl'>250%</span>-Follower Growth</p>
        <p className='text-gray-400 pb-1 md:pb-3'><span className='text-orange-600 text-xl md:text-2xl'>80%</span>-Increase state</p>
        <p className='text-gray-400 pb-1 md:pb-3'><span className='text-orange-600 text-xl md:text-2xl'>140%</span>-Total Engagement</p>
        <p className='text-gray-400 '><span className='text-orange-600 text-xl md:text-2xl'>75%</span>-Income growth</p>
       </div>
       <div>
        <Gallery img={img}/>
       </div>
       <div className=' pl-2 md:pl-10'>
          <p className='text-orange-600 font-semibold text-xl'>Fantastic job done by sociaizy</p>
           <div className='flex pt-2 md:pt-10'>
           <div><p className='text-3xl md:text-6xl text-gray-700'>{<LuQuote/>}</p></div>
           <p className='text-gray-400 pl-2 md:pl-7 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eaque rerum repellat odio. Veniam nesciunt facere perferendis. Nostrum, quasi corporis.</p>
           </div>
           <div className='pl-2 pt-2 md:pl-24 md:pt-6'>
            <h2 className='text-white font-semibold '>Steve Prosser</h2>
            <p className='text-gray-400'>CEO- Mindtech</p>
           </div>

       </div>
     </div>
    </div>
  )
}

export default About
