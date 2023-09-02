import Link from 'next/link';
import React from 'react';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
export default function Search() {
  return (
    <>
      <div >
        <div className="w-3/4 ml-8">
          <div className="container h-screen flex justify-center">
            <Link href="/"><div className=' mt-2 mr-10 w-2'><svg width="60" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#000000" d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z"/>
</svg>
            </div></Link>
            <div className="relative ">
              <div className="absolute top-4 left-5">
              </div>

              <input
                autoFocus
                type="text"
                className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 cd focus:outline-none bg-slate-200"
                placeholder="Search anything..."

              />
              <div className="absolute top-5 left-4">
                <FaSearch />
              </div>
             
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
