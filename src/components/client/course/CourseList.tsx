"use client";
import React, { useEffect, useState } from 'react'

import CourseCard from './CourseCard';
import { course } from '@/components/types';


export default function CourseList(params: { courses: course[] }) {
  const coursesList = params.courses;
  const [searchText, setSearchText] = useState("")
  const [courseNotFound ,  setCourseNotFound] =useState(false);
  const courseNotFoundDiv = <div className=' pt-20 flex w-full h-full justify-center items-center '><p className='text-[38px] text-prime'>لا يمكن إيجاد الكورس ...!</p> </div>
  
  const coursesToShow =coursesList.filter((course)=>{
    return searchText ===""?  true : course.title.includes(searchText);
  })

  useEffect(()=>{
    coursesToShow.length===0?setCourseNotFound(true):setCourseNotFound(false);
   
  },[coursesToShow])

  return (
    <>

      <div dir='rtl' className='mb-12 flex w-full justify-center'>
            <form>
                <input  type="text" onChange={(e)=>setSearchText(e.target.value)} className='pr-4 border-2 p-2 border-prime outline-none font-cairo text-lg max-sm:w-[200px]  w-[400px] rounded-xl' placeholder='بحث'  />
            </form>
      </div>

      <div className=' w-full h-full min-h-[50vh] flex justify-around items-start pb-8 flex-wrap  '>
        {
                coursesToShow.map((course) => {
          return <CourseCard course={course} key={course.id} />
        })}
        
        {
          courseNotFound===true? courseNotFoundDiv:""
        }
      </div>
    </>
  )
}
