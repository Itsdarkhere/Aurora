"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { Menu } from "lucide-react";

const Nav = () => {
  return (
    <nav className='w-full z-50 sticky top-0 left-0 right-0 px-4 bg-white'>
      <div className='max-w-7xl mx-auto h-16 flex items-center justify-between'>
        <Link href='/' className='text-green-950 text-xl font-indie-flower'>
          Psykologiaurora.fi
        </Link>

        {/* Desktop navigation */}
        <Link
          href='/varaus'
          className=' bg-theme text-sm font-medium text-white px-4 py-2 rounded-md hover:bg-green-900 transition-colors'
        >
          Varaa tapaaminen
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
