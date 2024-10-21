"use client";
import React from "react";
import Image from "next/image";


const Gallery = ({img}) => {
  return (
    
      <div >
        <Image className="object-cover rounded-xl w-full h-full md:w-[300px] md:h-[350px] shadow-xl my-2 md:hover:scale-105 duration-500"
          src={img}
          alt="Example Image"
          // width={400} 
          // height={500} 
        />
      </div>

  );
};

export default Gallery;
