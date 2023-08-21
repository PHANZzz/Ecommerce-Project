
import React from 'react'
import Footer from '../footer/footer'

export default function Card() {
  return (

    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="/apple.ico" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Apple Watch</h2>
          <p className="Price">219 $</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add Card</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
