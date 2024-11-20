"use client";
// import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { RootState } from '@/app/store/store';
import Image from 'next/image';
import SessionsList from '../session/SessionsList';
import { course } from '@/components/types';
import Enrolled from './Enrolled';
import JoinBox from './JoinBox';
import { setSessions } from '@/state/course/sessions';
import { useEffect } from 'react';

export default function CoursePage(params: { courseId: string }) {


  const courses = useSelector((state: RootState) => state.courses.value);
  // const [enrolled,setEnrolled] = useState(false);
  const enrolled = true;
  const course: course = courses[parseInt(params.courseId) - 1];
  //course-sessions
  const sessions = useSelector((state:RootState)=>state.session.value);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setSessions(course.sessions)) 
    console.log(sessions); 
  })
  
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
