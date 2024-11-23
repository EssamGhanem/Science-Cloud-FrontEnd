"use client"
import React from 'react'
import { course } from '../../types'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import JoinRequestForm from './JoinRequestForm';
import { FaRegWindowClose } from "react-icons/fa";

export default function CourseCard(params: { course: course }) {
  const course = params.course;
  const [openReqForm,setOpenReqForm ] = useState(false)
  
  const openRequestForm = ()=>{
    setOpenReqForm(true)

  }

  const closeRequestForm = ()=>{
    setOpenReqForm(false)

  }
  
  
  return (

      <>
            {
        openReqForm ?
                  <div className=' AbsoluteForm ' >
                    <button className=' fixed text-white top-[4%] right-[5%]
                        text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
                         onClick={() =>closeRequestForm()}  ><FaRegWindowClose />
                      </button> <JoinRequestForm course={course} />
                  </div>
                 :
                   <></>

      }
    
    <div dir='rtl' className='courseCard w-full  p-2 pb-[55px] 
    flex justify-between border-b-[1px] border-black max-md:items-center font-cairo max-md:flex-col'>
     <Link href={'/courses/' + params.course.id } className='w-full'>
        {/* image + text */}
        <div className='flex w-[80%] max-md:flex-col  max-md:items-center max-md:w-full '>
        {/* image */}
            <Image src={course.image} alt='course-img' className='w-full h-full   max-sm:w-[90%] max-sm:h-[45%] 
        md:w-[30%] lg:h-[160px] md:h-[120px] mb-3 hover:contrast-50  duration-500 ' width={240} height={50} />
        
          {/* text */}
          <div className='cardText flex flex-col gap-3 px-[20px] mb-3 md:w-[70%] '>
            <h3 className='hh2'>{course.title}</h3>
            <p className=' text-black/70'>{course.description}</p>
            <p className=' text-black/70 text-[14px]' > {course.sessions.length}.محاضرات</p>
            <p className='text-[12px] text-black/70'>أ\أماني غانم</p>
          </div>
        </div>
        </Link>
      <div className=' font-cairo font bold text-lg flex max-md:flex-row-reverse  flex-col gap-5 justify-between max-md:w-[100%] max-md:px-[20px] max-md:items-center '>
        <h3 className='hh2'>{course.price}EG</h3>
        <button className='  duration-300 outline-none border-none p-2 bg-prime text-white w-fit text-center 
        rounded-md max-md:text-[12px] max-md:px-3 py-1 px-4' 
        onClick={()=>openRequestForm()}
        >انضم</button>
      </div>
    </div>

   
    </>

  )
}
