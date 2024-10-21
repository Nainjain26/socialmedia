"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

// Define the props interface
interface GalleryProps {
  imgdata: string | StaticImageData; 
}

const Gallery: React.FC<GalleryProps> = ({ imgdata }) => {
  return (
    // <div className=" ">
      <Image
        className="object-cover rounded-xl relative w-full h-full md:w-[300px] md:h-[350px] shadow-xl my-2 md:hover:scale-105 duration-500"
        src={imgdata}
        // style={{position:"relative"}}
        alt="Example Image"
        fill
      />
    // </div>
  );
};

export default Gallery;
