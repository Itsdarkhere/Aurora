import Link from "next/link";
import React from "react";
import quote from "../public/quote_white.svg";
import Image from "next/image";
import arrow_right from "../public/chevron-right.svg";
import american_football from "../public/football.jpg";

const Introduction = () => {
  return (
    <div className='relative bg-gradient-to-r to-[#75A896] from-[#53786B] py-32 px-4 w-full overflow-hidden flex justify-center items-center'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-12 w-full max-w-7xl'>
        <div className=' w-96 relative max-w-full overflow-hidden h-80 rounded-xl'>
          <Image
            src={american_football}
            fill
            alt='Mies heittää amerikkalaista jalkapalloa'
            className="object-cover w-full h-full opacity-80"
          />
        </div>
        <div className='flex flex-col max-w-xl'>
          <Image
            src={quote}
            height={48}
            width={48}
            className='mb-6'
            alt='quote mark'
          />
          <span className=' text-sm text-slate-300 mb-6'>
            Aurora Sukunimi, Koulutettu Psykologi
          </span>
          <p className=' text-xl text-slate-50 mb-12 '>
            “Tavoitteena on vahvistaa suorituskykyäsi mielenprosessien avulla ja
            auttaa löytämään tasapaino, joka tukee sekä tavoitteidesi
            saavuttamisessa että kokonaisvaltaisessa jaksamisessa“
          </p>
          <div className='flex flex-col justify-center md:justify-start items-center md:flex-row gap-4'>
            <Link
              href='/varaus'
              className='bg-white w-full md:w-auto flex flex-row gap-2 justify-center items-center md:min-w-0 text-center text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors'
            >
              Varaa Tapaaminen
              <Image
                src={arrow_right}
                alt='arrow to the right'
                height={18}
                width={18}
              />
            </Link>
            <Link
              href='/lue-lisaa'
              className='border w-full md:w-auto text-center border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors'
            >
              Lue Lisää
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
