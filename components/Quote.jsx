import React from "react";
import Image from "next/image";
import quote from "../public/quote.svg"

const Quote = () => {
  return (
    <section className='bg-lightbg px-4 py-48'>
      <div className='max-w-4xl text-green-900 mx-auto flex flex-col items-center md:items-start md:flex-row gap-6 relative'>
        <Image src={quote} height={48} width={48} className="mb-6" alt="quote mark" />
        <blockquote className='text-center'>
          <p className='text-lg lg:text-xl text-theme leading-relaxed max-w-3xl mx-auto'>
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
