import React from 'react'
import Gallery from './Gallery'
import img1 from "./image/office-8828993_1280.jpg"
import img2 from "./image/telework-6795505_640.jpg"
import img3 from "./image/women-8080878_640.png"


import { FiArrowRightCircle } from "react-icons/fi";


const Blog = () => {
  return (
    <div className='p-5 md:p-16'>
      <div className=' text-center  flex justify-center'>
       <div className=''><p className="text-orange-500 font-semibold text-sm text-center w-max  bg-orange-300 rounded-2xl mx-auto  p-2">
          Our Blog
        </p>  
        <h1 className=" text-xl md:text-4xl font-semibold pt-1 pb-1 md:pt-5 md:pb-5">
          Latest Blog & Article
        </h1>
        <p className="text-gray-700 pb-2 text-sm md:text-xl md:pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, atque suscipit <br /> minima quos quibusdam impedit eaque unde aperiam obcaecati eos?</p>
      </div>
    </div>
    <div className='max-w-[1240px] mx-auto pt-2 md:pt-10  md:grid grid-cols-3 gap-5'>
     <div>
      <Gallery img={img1}/>
      <h1 className=' text-sm md:text-xl font-semibold'>3 Instagram Ads reports that simpilfy your marketing</h1>
        <p className='text-gray-500 pt-1 pb-1 text-sm md:pt-2 md:pb-2 md:text-xl'>November 18,2024</p>
        <p className='text-gray-500 text-sm md:xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias porro beatae architecto! Amet, facere ipsam. Lorem ipsum dolor sit amet.</p>
        <div >
        <button className="font-semibold flex text-sm pt-1 md:pt-3 md:text-xl">
          Read More  <div className='p-1'><p>{<FiArrowRightCircle/>}</p></div>
        </button>
      </div>
      </div>
      <div>
      <Gallery img={img2}/>
      <h1 className='text-sm md:text-xl font-semibold '>3 Instagram Ads reports that simpilfy your marketing</h1>
        <p className='text-gray-500 pt-1 pb-1 text-sm md:pt-2 md:pb-2  md:text-xl'>November 18,2024</p>
        <p className='text-gray-500 text-sm md:xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias porro beatae architecto! Amet, facere ipsam. Lorem ipsum dolor sit amet.</p>
        <div >
        <button className="font-semibold flex text-sm pt-1 md:pt-3 md:text-xl">
          Read More  <div className='p-1'><p>{<FiArrowRightCircle/>}</p></div>
        </button>
      </div>
      </div>
      <div>
      <Gallery img={img3}/>
      <h1 className='text-sm md:text-xl font-semibold'>3 Instagram Ads reports that simpilfy your marketing</h1>
        <p className='text-gray-500 pt-1 pb-1 text-sm md:pt-2 md:pb-2  md:text-xl'>November 18,2024</p>
        <p className='text-gray-500 text-sm md:xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias porro beatae architecto! Amet, facere ipsam. Lorem ipsum dolor sit amet.</p>
        <div >
        <button className="font-semibold flex text-sm pt-1 md:pt-3 md:text-xl">
          Read More  <div className='p-1'><p>{<FiArrowRightCircle/>}</p></div>
        </button>
      </div>
      </div>
     
    </div>
    
    </div>
  )
}

export default Blog
