import React from 'react'
import Pic from './bg_Book.png';
const Banner = () => {
  return (
    <>
    <div className='bg-white dark:bg-slate-700'>
    <div className='container flex flex-col px-4 mx-auto dark:bg-white max-w-screen-2xl md:px-20xl sm:flex-row md:flex-row bg-slate-700' >
    <div className='order-2 w-full mt-12 mb-12 md:w-1/2 md:mt-32 md:order-1'>
   <div className='space-y-6'>
   <h1 className='text-4xl font-bold dark:text-black'>
   Hello, Welcomes here to learn something 
   <span className='ml-1 text-pink-500'>new everyday!!!</span></h1>
   <p className='text-xl text-justify dark:text-black'>
   The bookshelf stands as a testament to the wonders of literature, holding within its wooden frame a treasure trove of stories and knowledge. Each book is a gateway to new worlds, offering adventure, wisdom, and escape to those who dare to explore its shelves.
   </p>
   <label className="flex items-center gap-2 p-2 bg-white border border-black rounded-md shadow-md input input-bordered">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 dark:bg-slate-300"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
   <input type="text" className="grow bg-slate-400 dark:text-black" placeholder="Email" />
   </label>
   </div>
   <button className="mt-6 btn btn-secondary">Secondary</button>
    </div>
    <div className='order-1 w-full md:w-1/2'>
    <img src={Pic} alt='Book' className='object-cover p-4 rounded-tl-lg rounded-tr-lg w-95 h-92'/>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Banner
