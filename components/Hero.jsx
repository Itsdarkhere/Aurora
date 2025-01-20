import Image from "next/image";
import React from "react";
import mobile_bg from "../public/hero1.png";

const Hero = () => {
  return (
    <div className='relative bg-black w-full py-72 p-4 flex justify-center items-center'>
      <div className='flex flex-col z-10 md:pb-12 justify-center items-center h-full w-full'>
        <h1 className='text-center text-5xl lg:text-6xl font-bold text-white mb-6'>
          Psyykkinen Valmennus
        </h1>

        <p className='text-xl text-center md:text-xl text-white/90 mb-12 max-w-2xl'>
        Aurora Huovinen | Psykologi (PsM), Psyykkinen valmentaja
        </p>
      </div>
      {/* Desktop background */}
      <Image 
        fill 
        src={mobile_bg} 
        className="block object-cover" 
        alt='Calm misty forest'
        priority
      />
    </div>
  );
};

export default Hero;
