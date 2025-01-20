import Image from "next/image";
import american_football from "../public/football.jpg";

export default function CTA() {
  return (
    <div className=' w-full bg-[#628C7E] lg:bg-[#F8F8F8] lg:py-40 px-6 flex justify-center items-center'>
      <div className='flex max-w-[500px] lg:max-w-6xl lg:shadow-sm bg-[#628C7E] lg:overflow-hidden lg:rounded-xl flex-row justify-between w-full'>
        <div className='flex py-12 lg:px-8 flex-col items-center gap-10 w-full lg:w-1/3'>
          <h4 className='text-3xl text-neutral-100 font-bold'>Ota yhteyttä</h4>

          <div className='flex w-full flex-col gap-6'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='email' className='text-neutral-100'>
                Sähköposti
              </label>
              <input
                type='email'
                id='email'
                className='px-4 py-2 border text-neutral-700 border-gray-300 rounded focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700 focus:border-transparent outline-none'
                placeholder='email@example.com'
              />
            </div>

            <div className='flex flex-col space-y-2'>
              <label htmlFor='message' className='text-neutral-100'>
                Viesti
              </label>
              <textarea
                id='message'
                rows={4}
                className='px-4 py-2 border text-neutral-700 border-gray-300 rounded focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700 focus:border-transparent outline-none resize-none'
                placeholder='Kirjoita viestisi tähän...'
              />
            </div>
            <button
              className=' mt-2 
        rounded 
        py-3 
        px-6 
        w-full 
        font-medium 
        bg-neutral-900 
        text-white
        transition-all
        duration-200
        
        /* Hover state */
        hover:bg-neutral-800
        
        /* Focus state */
        focus:outline-none
        focus:ring-2
        focus:ring-neutral-900
        focus:ring-offset-2
        '
            >
              Lähetä viesti
            </button>
          </div>
        </div>
        <div className='relative min-h-[500px] hidden lg:block overflow-hidden h-full flex-1'>
          <Image
            src={american_football}
            fill
            className='object-cover'
            alt='Mies heittää amerikkalaista jalkapalloa'
          />
        </div>
      </div>
    </div>
  );
}
