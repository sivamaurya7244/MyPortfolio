import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";







export default function Contact() {

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent");
      console.log(userInfo);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }


  return (

    <div name="Contact"
      className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 '>
      <h1 className='text-4xl font-bold mb-4'>Contact Me</h1>
      <span className='flex justify-center'>Please fill out the form to connect with me!!</span>
      <div className='flex flex-col items-center justify-center mt-5'>

        <form
         onSubmit={handleSubmit(onSubmit)}
          //  action="https://getform.io/f/bqomnvgb" method='post'

          className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
          <h1 className='text-xl font-bold'>Send Your Message</h1>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-' htmlFor="name">FullName</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && <span>This field is required</span>}
          </div>


          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-' htmlFor="name">Email</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span>This field is required</span>}
          </div>


          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-' htmlFor="name">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="message"
              name="message"
              type="text"
              placeholder="Enter your Query"
            />
            {errors.message && <span>This field is required</span>}

          </div>
          <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 duration-200 cursor-pointer'>Send</button>
        </form>
      </div>
    </div>
  )
}
