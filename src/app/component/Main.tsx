import React from "react";
import Image from "next/image";
// import
import img from "./image/image-from-rawpixel-id-15237963-png.png"
import { ImPlay3 } from "react-icons/im";
import { CgProfile } from 'react-icons/cg'


const Main = () => {
  return (
    <div className=" flex flex-col-reverse p-2 md:pb-20 max-w-[1240px]   mx-auto my-10 md:grid grid-cols-2 relative ">
      <div className="col-span-1 pt-28">
        <p className="text-orange-500 font-semibold  text-sm bg-orange-300 rounded-2xl  w-max p-1">
          Welcome TO socialzy
        </p>
        <h1 className=" text-2xl font-semibold pt-2 pd-2 lg:text-4xl md:text-5xl md:pt-5 md:pb-5">
          Welcome to our <br />
          Website MediaPro
        </h1>
        <p className="text-gray-500 pb-1 text-sm md:text-xl md:pb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing <br /> Illo
          soluta quia necessitatibus consectetur maiores  <br />
          laudantium sit, tempore quis fuga.
        </p>
        <div className="flex ">
          <div>
            <button className="bg-blue-800 p-2 text-sm rounded-3xl text-white md:text-xl">
              Get Started
            </button>
          </div>
          <div className="pr-4 pl-4">
            <p className="p-3 text-orange-500 shadow-xl	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);  bg-white rounded-[50%]">
              {<ImPlay3 />}
            </p>
          </div>
          <div className="p-2">
            <p className="font-semibold cursor-pointer "> Watch Info</p>
          </div>
        </div>
        <div className="flex pt-6 ">
          <div className="text-3xl absolute left-6 "> {<CgProfile/>}</div>
          <div className="text-3xl absolute left-10 z-10"> {<CgProfile/>}</div>
          <div className="text-3xl absolute left-14 z-20"> {<CgProfile/>}</div>
          <div className="text-3xl"> {<CgProfile/>}</div>
          <div className="font-semibold pl-16 pt-1">3460+ satisfied client</div>
        </div>
      </div>

      <div className="relative h-[250px] w-[290px] md:h-[350px] md:w-[390px]">
        <Image className=""
          src={img}
          alt="Example Image"
          // width={400} 
        
          // height={500} 
        />
      <div className=' h-[290px] w-[290px] md:h-[430px] md:w-[430px] rounded-[50%] bg-purple-500  z-[-1] absolute top-11 left-auto '></div>
      </div>
      
    </div>
  );
};

export default Main;
