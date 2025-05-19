import React from 'react'

export default function Contact() {
  return (
    <div name="Contact"
      className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 '>
      <h1 className='text-4xl font-bold mb-4'>Contact Me</h1>
      <span className='flex justify-center'>Please fill out the form to connect with me!!</span>
      <div className='flex flex-col items-center justify-center mt-5'>
        <form action="https://getform.io/f/bqomnvgb" method='post'
         className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
          <h1 className='text-xl font-bold'>Send Your Message</h1>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-' htmlFor="name">FullName</label>
            <input
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your fullname"
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-' htmlFor="name">Email</label>
            <input
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-' htmlFor="name">Message</label>
            <textarea
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="message"
              name="message"
              type="text"
              placeholder="Enter your Query"
            />

          </div>
          <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 duration-200 cursor-pointer'>Send</button>
        </form>
      </div>
    </div>
  )
}
