"use client"
import { course } from '@/components/types'
import React, { useState } from 'react'
import Image from 'next/image';
import SessionsList from '../session/SessionsList';
import Enrolled from './Enrolled';
import JoinBox from './JoinBox';
export default function CourseFound(params:{course:course}) {
    const course = params.course;
    const sessions = course.sessions
    const [enrolled,setEnrolled] = useState(false);

  
    return (
    
    <div dir='rtl' className='coursePage p-container flex flex-col items-center justify-center'>
    <h2 className='hh2 mb-5 text-prime'>{course.title}</h2>
    <div className='courseImg w-[70%] rounded-[5px] border-blue-800 border-2 p-10 mb-7 shadow-black shadow-lg ' >
      <Image src={course.image} alt='course-image'
        className='   w-full h-full  '
        width={240} height={135} />
    </div>
    <div className='courseDescription  w-[70%] rounded-[5px] border-blue-800 border-2 p-5 mb-10 shadow-black shadow-md  '>
      
      <p className='hh3 font-bold'>عن الدوره</p>
      <p className='hh3'>{course.description}</p>

    </div>

    <div className='sessions  w-[70%] rounded-[5px] border-blue-800 border-2 p-5 mb-7 shadow-black shadow-md  '>
    <p className='hh3 font-bold mb-4 '>المحتوي</p>
      <SessionsList sessions={sessions} />
    </div>
        {
          enrolled? <Enrolled/>:<JoinBox/>
        }
    
  </div>
  )
}
