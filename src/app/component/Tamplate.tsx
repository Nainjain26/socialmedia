import React from 'react'
import { AiTwotoneMail } from 'react-icons/ai'
import { FaLaptopCode } from 'react-icons/fa'
import { RiPagesLine } from "react-icons/ri";
import { FaBattleNet } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { FaAdversal } from "react-icons/fa";


const Tamplate = () => {
  return (
    <div className='pt-5 pb-3 md:pt-20 bg-blue-950'>
  
  <div className='text-center flex justify-center'>
    <div>
      <p className="text-orange-500 font-semibold text-sm md:text-base lg:text-xl bg-orange-300 rounded-2xl mx-auto p-1 md:p-2 w-max">
        Our Services
      </p>
      <h1 className="text-xl md:text-4xl text-white font-semibold pt-1 pb-1 md:pt-5 md:pb-5">
        We provide the best services for you
      </h1>
      <p className="text-gray-400 pb-1 md:pb-5 text-sm md:text-lg">
        We offer a wide range of services tailored to your needs, ensuring you<br />receive the best experience possible.
      </p>
    </div>
  </div>

  
  <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
    {/* Service 1 */}
    <div className='bg-white rounded-xl shadow-lg my-4 p-6 transform transition-transform hover:scale-105 duration-500'>
      <p className='text-3xl md:text-5xl text-orange-500 pb-4'>{<AiTwotoneMail />}</p>
      <h2 className='font-semibold text-md md:text-lg lg:text-xl pb-2'>Email Marketing</h2>
      <p className='text-sm md:text-base lg:text-lg text-gray-600'>
        We’re here when you need us. Enjoy 24/7 customer support for any technical or account-related queries.
      </p>
    </div>

    {/* Service 2 */}
    <div className='bg-white rounded-xl shadow-lg my-4 p-6 transform transition-transform hover:scale-105 duration-500'>
      <p className='text-3xl md:text-5xl text-orange-500 pb-4'>{<FaLaptopCode />}</p>
      <h2 className='font-semibold text-md md:text-lg lg:text-xl pb-2'>SEO Management</h2>
      <p className='text-sm md:text-base lg:text-lg text-gray-600'>
        We help optimize your site’s search engine ranking, ensuring it performs well and reaches your target audience.
      </p>
    </div>

    {/* Service 3 */}
    <div className='bg-white rounded-xl shadow-lg my-4 p-6 transform transition-transform hover:scale-105 duration-500'>
      <p className='text-3xl md:text-5xl text-orange-500 pb-4'>{<RiPagesLine />}</p>
      <h2 className='font-semibold text-md md:text-lg lg:text-xl pb-2'>Content Writing</h2>
      <p className='text-sm md:text-base lg:text-lg text-gray-600'>
        We provide quality content to ensure your message resonates with your audience and boosts engagement.
      </p>
    </div>

    {/* Service 4 */}
    <div className='bg-white rounded-xl shadow-lg my-4 p-6 transform transition-transform hover:scale-105 duration-500'>
      <p className='text-3xl md:text-5xl text-orange-500 pb-4'>{<FaBattleNet />}</p>
      <h2 className='font-semibold text-md md:text-lg lg:text-xl pb-2'>Business Strategy</h2>
      <p className='text-sm md:text-base lg:text-lg text-gray-600'>
        Our strategies help guide decision-making processes, ensuring that your business meets its objectives efficiently.
      </p>
    </div>

    {/* Service 5 */}
    <div className='bg-white rounded-xl shadow-lg my-4 p-6 transform transition-transform hover:scale-105 duration-500'>
      <p className='text-3xl md:text-5xl text-orange-500 pb-4'>{<MdManageHistory />}</p>
      <h2 className='font-semibold text-md md:text-lg lg:text-xl pb-2'>Social Media Management</h2>
      <p className='text-sm md:text-base lg:text-lg text-gray-600'>
        We manage your social media accounts, focusing on enhancing engagement and growing your online presence.
      </p>
    </div>

    {/* Service 6 */}
    <div className='bg-white rounded-xl shadow-lg my-4 p-6 transform transition-transform hover:scale-105 duration-500'>
      <p className='text-3xl md:text-5xl text-orange-500 pb-4'>{<FaAdversal />}</p>
      <h2 className='font-semibold text-md md:text-lg lg:text-xl pb-2'>Social Media Advertising</h2>
      <p className='text-sm md:text-base lg:text-lg text-gray-600'>
        We create and run targeted ad campaigns to help you reach a broader audience and drive measurable results.
      </p>
    </div>
  </div>
</div>

  )
}

export default Tamplate
