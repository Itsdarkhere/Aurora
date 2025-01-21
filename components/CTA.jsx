// import Image from "next/image";
// import american_football from "../public/football.jpg";
import { MessageSquare } from "lucide-react";

export default function CTA() {
  return (
    <div className=' w-full bg-[#F8F8F8] pb-12 lg:py-40 px-4 flex justify-center items-center'>
      <div className='max-w-lg mx-auto'>
        <div className='bg-theme px-4 py-8 md:p-8 rounded-t-2xl'>
          <div className='flex items-center justify-center space-x-3 mb-4'>
            {/* <MessageSquare className='w-8 h-8 text-white' /> */}
            <h2 className='text-3xl font-bold text-white'>Ota yhteyttä</h2>
          </div>
          <p className='text-center text-white/90'>
            Jos jokin vielä mietityttää tai haluat kysyä lisää valmennuksesta,
            ota rohkeasti yhteyttä.
          </p>
        </div>

        <div className='bg-white px-4 py-8 md:p-8 rounded-b-2xl shadow-xl'>
          <form className='space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Sähköposti
              </label>
              <input
                type='email'
                id='email'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className='w-full px-4 py-3 text-neutral-700 bg-gray-50 border border-gray-200 rounded-lg'
                placeholder='esimerkki@sähköposti.com'
                required
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Viesti
              </label>
              <textarea
                id='message'
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className='w-full px-4 py-3 text-neutral-700 bg-gray-50 border border-gray-200 rounded-lg'
                placeholder='Viesti...'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full py-4 px-6 bg-theme text-white font-medium rounded-lg'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
