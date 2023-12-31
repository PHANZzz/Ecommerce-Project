"use client"
import React, { useState } from 'react'
import Alert from '../alertContact/page'

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setTimeout(() => {
      setAlert(true);
    }, 500);
    
    setTimeout(() => {
      window.location.href= '/';
    }, 1500);


    fetch('https://spingframeworkwithmongodb-production.up.railway.app/UserPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        subject,
        message
      })
    })
      .then(response => response.json())
      .then(data => {
        
      })
      .catch(error => {
        // handle the error
      });
  }

  return (
    <section className="bg-white" id='Contact relative'>
      {alert === false ? null : <Alert/>} 
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md z-0 absulote">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              style={{ fontSize: '16px' }}
              autoFocus
              type="email"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
              placeholder="name@sophankan.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              style={{ fontSize: '16px' }}
              type="text"
              id="subject"
              value={subject}
              onChange={event => setSubject(event.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              style={{ fontSize: '16px' }}
              id="message"
              rows={6}
              value={message}
              onChange={event => setMessage(event.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
          >
            Send message
          </button>

        </form>
      </div>
    </section>
  )
}
