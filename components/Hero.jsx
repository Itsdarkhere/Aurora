import React from "react";

const Hero = () => {
  return (
    <div className='relative h-screen w-full px-4 flex justify-center items-center overflow-hidden'>
      <div className='relative max-w-7xl flex justify-start items-center h-full w-full'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
            Psyykkinen Valmennus
          </h1>

          <p className='text-lg md:text-xl text-white/90 mb-8 max-w-xl'>
            Tuen psyykkisenä valmentajana urheilijoiden ja liiketoiminnan
            ammattilaisten hyvinvointia ja menestystä.
          </p>

          <div className='flex flex-wrap gap-4'>
            <button className='bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors'>
              Varaa Tapaaminen
            </button>
            <button className='border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors'>
              Lue Lisää
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
