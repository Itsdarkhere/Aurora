import Image from "next/image";
import Link from "next/link";
import React from "react";
import background from "../public/background-2.png";
import mobile_bg from "../public/mobile_bg.jpg";
import arrow_right from "../public/chevron-right.svg"

const Hero = () => {
  return (
    <div className='relative bg-black h-screen w-full p-4 flex justify-center items-center'>
      <div className='flex flex-col z-10 justify-center items-center h-full w-full'>
        <h1 className='text-center text-5xl lg:text-6xl font-bold text-white mb-6'>
          Psyykkinen Valmennus
        </h1>

        <p className='text-xl text-center md:text-xl text-white/90 mb-12 max-w-2xl'>
          Tuen psyykkisenä valmentajana urheilijoiden ja liiketoiminnan
          ammattilaisten hyvinvointia ja menestystä.
        </p>

        <div className='flex flex-col justify-center md:justify-start items-center md:flex-row gap-4'>
          <Link
            href='/varaus'
            className='bg-white min-w-64 flex flex-row gap-2 justify-center items-center md:min-w-0 text-center text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors'
          >
            Varaa Tapaaminen
            <Image src={arrow_right} alt="arrow to the right" height={18} width={18} />
          </Link>
          <Link
            href='/lue-lisaa'
            className='border min-w-64 md:min-w-0 text-center border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors'
          >
            Lue Lisää
          </Link>
        </div>
      </div>
      {/* Desktop background */}
      <Image 
        fill 
        src={background} 
        className="hidden md:block opacity-60" 
        alt='Calm misty forest'
        priority
      />
      
      {/* Mobile background */}
      <Image 
        fill 
        src={mobile_bg} 
        className="block md:hidden opacity-60" 
        alt='Calm misty forest - mobile view'
        priority
      />
    </div>
  );
};

export default Hero;
