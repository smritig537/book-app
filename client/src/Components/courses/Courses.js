import React from 'react'
import Navbar from '../Navbar'
import Course from '../Course'
import Footer from '../Footer'

const Courses = () => {
  
  return (
    <>
    <Navbar/>
    <div className='min-h-screen h-200 bg-slate-100' >
    <Course/>
    </div>
    <Footer/>

    </>
   
  )
}

export default Courses
