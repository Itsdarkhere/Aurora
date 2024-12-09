import Link from "next/link";
import React from "react";

const Introduction = () => {
  return (
    <div className='relative bg-gradient-to-r to-[#75A896] from-[#53786B] py-20 px-4 w-full overflow-hidden flex justify-center items-center'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-12 w-full max-w-7xl'>
        <div className=' w-96 h-96 rounded-xl bg-green-950'></div>
        <div className='flex flex-col max-w-xl'>
          <div className=' w-12 h-12 rounded-lg bg-green-950 mb-8'></div>
          <span className=' text-sm text-slate-300 mb-6'>
            Aurora Sukunimi, Koulutettu Psykologi
          </span>
          <p className=' text-xl text-slate-50 mb-12 '>
            “Tavoitteena on vahvistaa suorituskykyäsi mielenprosessien avulla ja
            auttaa löytämään tasapaino, joka tukee sekä tavoitteidesi
            saavuttamisessa että kokonaisvaltaisessa jaksamisessa“
          </p>
          <div className='flex flex-col justify-center md:justify-start items-center md:flex-row gap-4'>
            <Link href="/varaus" className='bg-white w-full md:w-auto text-center text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors'>
              Varaa Tapaaminen
            </Link>
            <Link href="/aurora" className='border w-full md:w-auto text-center border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors'>
              Lue Lisää
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
