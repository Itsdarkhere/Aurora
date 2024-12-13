import Link from "next/link";
import React from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=' bg-green-900 px-4 py-8 flex justify-center items-center flex-col'>
      <div className=' w-full max-w-7xl flex flex-row justify-between items-center pb-6 border-b border-white border-opacity-20 '>
        <p className=' text-white text-xl font-indie-flower'>
          Psykologiaurora.fi
        </p>
        <Link
          href='/varaus'
          className='bg-white text-center text-sm font-medium text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors'
        >
          Varaus
        </Link>
      </div>
      <div className=' w-full max-w-7xl flex flex-row gap-4 justify-between pt-6'>
        <div className='flex flex-col'>
          <h5 className='mb-5 font-medium text-sm text-white'>Linkit</h5>
          <Link
            href='/lue-lisaa'
            className=' font-light text-sm text-white text-opacity-60 mb-[6px]'
          >
            Aurora
          </Link>
          <Link
            href='/varaus'
            className=' font-light text-sm text-white text-opacity-60'
          >
            Varaus
          </Link>
        </div>
        <div className='flex flex-col'>
          <h5 className='mb-5 font-medium text-sm text-white'>Yhteystiedot</h5>
          <p className=' font-light text-sm text-white text-opacity-60 mb-[6px]'>
            +1 891 989-11-91
          </p>
          <p className=' font-light text-sm text-white text-opacity-60'>
            help@logoipsum.com
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
          <Link href="https://linkedin.com" target="_blank" className=' w-10 h-10 text-white flex justify-center items-center rounded-lg bg-white bg-opacity-10'>
            <Instagram size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className=' w-10 h-10 text-white flex justify-center items-center rounded-lg bg-white bg-opacity-10'>
            <Twitter size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className=' w-10 h-10 text-white flex justify-center items-center rounded-lg bg-white bg-opacity-10'>
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
