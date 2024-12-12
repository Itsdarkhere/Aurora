import Image from "next/image";
import Link from "next/link";
import React from "react";
import background from "../public/background.png";

const Hero = () => {
  return (
    <div className='relative h-screen w-full p-4 flex justify-center items-center'>
      <Image fill src={background} alt='Calm misty forest' />
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
            className='bg-white min-w-64 md:min-w-0 text-center text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors'
          >
            Varaa Tapaaminen
          </Link>
          <Link
            href='/lue-lisaa'
            className='border min-w-64 md:min-w-0 text-center border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors'
          >
            Lue Lisää
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
