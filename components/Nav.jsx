import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className='w-full border-b px-4 border-gray-200 bg-white'>
      <div className='max-w-7xl mx-auto h-16 flex items-center justify-between'>
        <Link href="/" className=" text-green-950 text-xl font-indie-flower">Psykologiaurora.fi</Link>
        {/* Left side navigation links */}
        <div className='flex items-center space-x-8'>
          <Link
            href='/lue-lisaa'
            className='text-gray-600 hover:text-gray-900 transition-colors'
          >
            Lue lisää
          </Link>
          <Link
          href='/varaus'
          className='bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors'
        >
          Varaa tapaaminen
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
