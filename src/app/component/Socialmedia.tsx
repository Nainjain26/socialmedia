import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Socialmedia = () => {
  return (
    <div className='flex pt-2 md:pt-5'>
      <div className='pr-1 md:pr-3'><p className='p-2 text-sm md:text-2xl text-white w-max bg-orange-600 rounded-[50%]'>{<FaFacebookF/>}</p></div>
      <div className='pr-1 md:pr-3'><p className='p-2 text-sm md:text-2xl text-white w-max bg-orange-600 rounded-[50%]'>{< FaXTwitter/>}</p></div>
      <div className='pr-1 md:pr-3'><p className='p-2 text-sm md:text-2xl text-white w-max bg-orange-600 rounded-[50%]'>{<FaInstagram/>}</p></div>
      <div className='pr-1 md:pr-3'><p className='p-2 text-sm md:text-2xl text-white w-max bg-orange-600 rounded-[50%]'>{<FaLinkedinIn/>}</p></div>
    </div>
  )
}

export default Socialmedia
