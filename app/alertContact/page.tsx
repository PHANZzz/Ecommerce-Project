import React from 'react'

export default function alertContact() {
    return (
        <div className="alert alert-success mt-[50%] lg:mt-[20%] z-10 absolute lg:w-[50%] lg:ml-[25%] lg:h-[10vh]">
            <svg xmlns="http://www.w3.org/2000/svg" className="lg:ml-[50%] lg:mt-6 stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className='lg:mt-6 lg:ml-[20%]'>Thank you for contact us!</span>
        </div>
    )
}
