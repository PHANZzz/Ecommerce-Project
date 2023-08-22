import Link from 'next/link';
import React from 'react';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';

export default function Search() {
  return (
    <>
      <div className="bg-gray-200 ">
        <div className="container h-screen flex justify-center">
          <Link href="/"><div className='mt-5 mr-2'><FaArrowLeft /></div></Link>
          <div className="relative">
            <div className="absolute top-4 left-5">
              
            </div>
            <input
            autoFocus
              type="text"
              className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
              placeholder="Search anything..."
            />
            <div className="absolute top-2 right-2">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
