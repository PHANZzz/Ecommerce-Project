import Link from 'next/link';
import React from 'react';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  return (
    <>
      <div className='mt-5 '>
        <div className="">
          <div className="container h-screen flex justify-center">
            <Link href="/"><div className=' mt-4 mr-8 w-2'><FaArrowLeft size={24} />
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
