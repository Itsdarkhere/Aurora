import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className='w-full border-b px-4 border-gray-200 bg-white'>
      <div className='max-w-7xl mx-auto h-16 flex items-center justify-between'>
        {/* Left side navigation links */}
        <div className='flex items-center space-x-8'>
          <Link
            href='/'
            className='text-gray-600 hover:text-gray-900 transition-colors'
          >
            Kotisivu
          </Link>
          <Link
            href='/aurora'
            className='text-gray-600 hover:text-gray-900 transition-colors'
          >
            Aurora
          </Link>
        </div>

        {/* Right side button */}
        <Link
          href='#'
          className='bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors'
        >
          Varaa tapaaminen
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
