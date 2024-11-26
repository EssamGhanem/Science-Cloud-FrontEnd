"use client";
import Image from 'next/image';
import React from 'react'
import OnlineSessions from './OnlineSessions';
import Courses from './Courses';


export default function TwoChoice() {
  return (
    <div className='w-full  mt-[70px] pb-[120px]'>

      <div className='w-full flex justify-center items-center mb-[20px] '>
      <Image alt='img' src={"/think.png"} width={50} height={50} className=' max-sm:w-[30] max-sm:h-[30]' /><p dir='rtl' className='text-center text-prime text-[38px] font-cairo p-4  w-fit  max-sm:text-[24px]'> إختار الطريقة إاللي تنسبك...!</p> 
       
      </div>


      <div className='  flex justify-center  bg-prime  max-sm:flex-col-reverse '>
        {/* Left */}
        <div className='left w-[50%] max-sm:w-full h-full  duration-500 bg--prime p-5  flex justify-start flex-col items-center '>
               <Courses />
        </div>


        {/* Right */}
        <div className='Right lg:w-[60%] w-[50%] max-sm:w-full h-full bg-white border-prime  shadow-lg border-l-0 lg:pl-[10%] p-5 duration-500  lg:clip-custom-polygon flex justify-start flex-col items-center '>
         <OnlineSessions />
        
          </div>

      </div>


    </div>
  )
}
