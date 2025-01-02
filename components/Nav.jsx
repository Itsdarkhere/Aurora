"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { Menu } from "lucide-react";

const Nav = () => {
  return (
    <nav className='w-full z-50 sticky top-0 left-0 right-0 border-b px-4 border-gray-200 bg-white'>
      <div className='max-w-7xl mx-auto h-16 flex items-center justify-between'>
        <Link href='/' className='text-green-950 text-xl font-indie-flower'>
          Psykologiaurora.fi
        </Link>

        {/* Desktop navigation */}
        <div className='hidden md:flex items-center space-x-6'>
          <Link
            href='/lue-lisaa'
            className='text-gray-600 text-sm hover:text-gray-900 transition-colors'
          >
            Lue lisää
          </Link>
          <Link
            href='/varaus'
            className=' bg-theme text-sm font-medium text-white px-4 py-2 rounded-md hover:bg-green-900 transition-colors'
          >
            Varaa tapaaminen
          </Link>
        </div>

        {/* Mobile navigation */}
        <MobileNav />
      </div>
    </nav>
  );
};

function MobileNav() {
  const dialogRef = useRef(null);

  const handleOpen = () => {
    dialogRef.current?.showModal();
  };

  const handleClose = () => {
    dialogRef.current?.close();
  };

  // Handle click outside
  const handleClickOutside = (e) => {
    const dialogDimensions = dialogRef.current?.getBoundingClientRect();
    if (dialogDimensions) {
      handleClose();
    }
  };

  return (
    <div className='md:hidden relative'>
      <button
        onClick={handleOpen}
        className='p-2 text-gray-600 hover:text-gray-900 transition-colors'
        aria-label='Menu'
      >
        <Menu size={24} />
      </button>

      <dialog
        ref={dialogRef}
        className='backdrop:bg-black/50 inset-inline-end fixed m-0 w-64 right-4 left-auto top-16 p-4 rounded-lg shadow-lg border border-gray-200'
        onClick={handleClickOutside}
        autoFocus={false}
      >
        <div className='flex flex-col space-y-4'>
          <Link
            href='/lue-lisaa'
            className='text-gray-600 hover:text-gray-900 transition-colors px-4 py-2'
            onClick={handleClose}
          >
            Lue lisää
          </Link>
          <Link
            href='/varaus'
            className='bg-theme text-white hover:bg-green-900 transition-colors px-4 py-2 rounded-md text-center'
            onClick={handleClose}
          >
            Varaa tapaaminen
          </Link>
        </div>
      </dialog>
    </div>
  );
}

export default Nav;
