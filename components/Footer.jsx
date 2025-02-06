import Link from "next/link";
import React from "react";
import tiktok from "../public/tiktok.svg"
import linkedin from "../public/linkedin.svg"
import { Instagram, Twitter, Linkedin, Tiktok } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=' bg-theme px-4 py-8 flex justify-center items-center flex-col'>
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
      <div className=' w-full max-w-7xl flex flex-col md:flex-row gap-8 justify-between pt-6'>
        {/* <div className='flex flex-col'>
          <Link
            href='/varaus'
            className=' font-light text-sm text-white text-opacity-60'
          >
            Varaus
          </Link>
        </div> */}
        <div className='flex flex-col'>
          {/* <h5 className='mb-5 font-medium text-sm text-white'>Yhteystiedot</h5> */}
          <p className=' font-light text-sm text-white text-opacity-60'>
            aurora.amanda.huovinen@gmail.com
          </p>
        </div>
        <div className='flex flex-row gap-4'>
          <Link href="https://www.linkedin.com/in/aurora-huovinen" target="_blank" className=' w-10 h-10 text-white flex justify-center items-center rounded-lg bg-white bg-opacity-10'>
            <Image alt="linkedin logo" src={linkedin} height={24} width={24} />
          </Link>
          <Link href="https://www.tiktok.com/@psykologiaurora" target="_blank" className=' w-10 h-10 text-white flex justify-center items-center rounded-lg bg-white bg-opacity-10'>
            <Image alt="tiktok logo" src={tiktok} height={24} width={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
