import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Navbar from './Navbar';
import Footer from './Footer';

function Contact(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
    const onSubmit = (data) => console.log(data)
    
  return (
    <>
    <Navbar/>
    <div className='text-black dark:text-white dark:bg-white bg-slate-700'>
    <br className='bg-slate-700 dark:bg-white'/>
    <br className='bg-white'/>
    <br/>
    <br/>
    <br/>
    <div className='flex justify-center text-black bg-slate-700 dark:bg-white' >
    <div className="justify-center bg-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dailog"className='text-black dark:bg-white bg-slate-700 dark:text-white'>
      {/* if there is a button in form, it will close the modal */}
      <Link
        to="/"
        className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
        onClick={() => document.getElementById("my_modal_3").close()}
      >
        ✕
      </Link>

      <h3 className="text-lg font-bold text-white dark:text-black">Contact Us</h3>
      {/* Email */}
      <div className="mt-4 space-y-2">
        <span className="text-lg font-bold text-white dark:text-black">Email</span>
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          className="px-3 py-1 text-white border rounded-md outline-none w-80"
          {...register("email", { required: true })}
        />
        <br />
        {errors.email && (
          <span className="text-sm text-red-500">
            This field is required
          </span>
        )}
      </div>
      {/* password */}
      <div className="mt-4 space-y-2">
        <span className="text-lg font-bold text-white dark:text-black">Password</span>
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          className="px-3 py-1 text-white border rounded-md outline-none w-80"
          {...register("password", { required: true })}
        />
        <br />
        {errors.password && (
          <span className="text-sm text-red-500">
            This field is required
          </span>
        )}
      </div>

      {/* Button */}
      <div className="flex justify-around mt-6">
        <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">
          Login
        </button>
        <p>
          Not registered?{" "}
          <Link
            to="/signup"
            className="text-blue-500 underline cursor-pointer"
          >
            Signup
          </Link>{" "}
        </p>
      </div>
    </form>
  </div>
    </div>
    </div>
    <div className='text-black dark:bg-white bg-slate-700 dark:text-white'>
    <br/>
    <br/>
    <br/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
