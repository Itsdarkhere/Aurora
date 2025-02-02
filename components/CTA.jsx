"use client";
import success from "../public/success.svg"
import Image from "next/image";
import { useState } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: event.target.email.value,
          message: event.target.message.value,
        }),
      });
  
      if (!res.ok) {
        // Handle HTTP errors (status codes outside 200-299 range)
        console.log('Form submission failed:', res.status, await res.text());
        return;
      }
  
      // Only set submitted to true if the request was successful
      setSubmitted(true);
    } catch (error) {
      // Handle network errors or other exceptions
      console.log('Error submitting form:', error);
    }
  };

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
          {!submitted ? (
            <form onSubmit={handleSubmit} className='space-y-6'>
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
          ) : (
            <MessageSent />
          )}
        </div>
      </div>
    </div>
  );
}

function MessageSent() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Image src={success} alt="Onnistuminen" height={100} width={100} />
      <h6 className=" text-lg text-green-600 font-semibold">Viesti lähetetty!</h6>
    </div>
  );
}
