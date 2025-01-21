import React from "react";
import Image from "next/image";
import american_football from "../public/football.jpg";

const Introduction = () => {
  return (
    <div className='relative bg-[#F8F8F8] py-12 md:py-32 px-4 w-full overflow-hidden flex justify-center items-center'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-12 w-full max-w-7xl'>
        <div className=' w-full shadow-md min-w-80 md:w-1/2 relative max-w-full overflow-hidden h-80 rounded-xl'>
          <Image
            src={american_football}
            fill
            alt='Mies heittää amerikkalaista jalkapalloa'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='flex flex-col max-w-xl gap-8'>
          <h4 className=' text-3xl text-[#4C7A6A] font-bold'>Tietoa Minusta</h4>
          <p className=' text-base lg:text-lg lg:leading-6 text-neutral-700'>
            Psyykkisenä valmentajana autan urheilijoita ja liiketoiminnan
            ammattilaisia kehittämään suorituskykyään, vahvistamaan
            hyvinvointiaan ja saavuttamaan tavoitteensa.<br/><br/>Tavoitteena on
            vahvistaa suorituskykyäsi mielenprosessien avulla ja auttaa
            löytämään tasapaino, joka tukee sekä tavoitteidesi saavuttamisessa
            että kokonaisvaltaisessa jaksamisessa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
