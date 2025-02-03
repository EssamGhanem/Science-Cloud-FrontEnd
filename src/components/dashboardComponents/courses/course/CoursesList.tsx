"use client";

import React from 'react'
import CourseCard from './CourseCard';

import { course } from '@/components/types';


export default function CoursesList(params:{courses:course[]}) {
  const  courses = params.courses;


  
  return (
        
    <div dir='rtl' className=' w-[90%]   md:p-5 p-1 m-10   '>
        <h2 className=' hh2 mb-3 '>الكورسات :</h2>
        <div className='my-2 flex justify-between p-2 warp bg-black/20' >
          <p className='w-[50%] hh3 '>الاسم </p> <p  className='w-[25%] hh3 text-center '>عدد السيشنز</p> <p className='hh3 w-[25%] text-center  '>عدد الطلاب</p>
         </div>
        <div className='courses'>
            {courses.map((course)=>{
              return <CourseCard course={course} key={course._id}/>
            })}
        </div>
    </div>
  )
}
