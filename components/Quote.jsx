import React from 'react';

const Quote = () => {
  return (
    <section className="bg-gray-50 px-4 py-20">
      <div className="max-w-4xl text-green-900 mx-auto px-4 relative">
        {/* Decorative Star */}
        <div className="absolute -top-2 left-0 text-sage-200/50 text-4xl" aria-hidden="true">
          ★
        </div>
        
        {/* Decorative Swirl */}
        <div className="absolute -top-2 right-0 text-sage-200/50 text-4xl" aria-hidden="true">
          ❋
        </div>

        {/* Quote Content */}
        <blockquote className="text-center">
          <p className="text-lg md:text-xl lg:text-2xl text-sage-700 leading-relaxed max-w-3xl mx-auto">
            "Tavoitteena on vahvistaa suorituskykyäsi mielenprosessien avulla ja auttaa löytämään tasapaino, joka tukee sekä tavoitteidesi saavuttamisessa että kokonaisvaltaisessa jaksamisessa."
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;