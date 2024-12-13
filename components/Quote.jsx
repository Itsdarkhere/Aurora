import React from "react";

const Quote = () => {
  return (
    <section className='bg-gray-50 px-4 py-36 md:pb-0 md:pt-80'>
      <div className='max-w-4xl text-green-900 mx-auto flex flex-col items-center md:items-start md:flex-row gap-6 relative'>
        <div className=' w-12 h-12 rounded-lg bg-green-950 mb-8'></div>
        <blockquote className='text-center'>
          <p className='text-lg lg:text-xl text-sage-700 leading-relaxed max-w-3xl mx-auto'>
            &quot;Tavoitteena on vahvistaa suorituskykyäsi mielenprosessien
            avulla ja auttaa löytämään tasapaino, joka tukee sekä tavoitteidesi
            saavuttamisessa että kokonaisvaltaisessa jaksamisessa.&quot;
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
