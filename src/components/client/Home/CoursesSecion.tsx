
import { courses } from '@/data'
import React from 'react'
import HomeCourseCard from './HomeCourseCard';


export default function CoursesSecion() {


  const lastCourses = courses.slice(courses.length - 4, courses.length - 1)

  return (

    <div className='flex flex-col items-center'>
      
      {/* Title */}
      <p className='text-center text-prime text-[38px] font-cairo  mb-12 p-4 font-bol w-fit text- max-sm:text-[28px] '> أحدث الدورات  </p>

      {/* Courses list */}

      <div className=' w-full h-full flex justify-around items-start pb-8 flex-wrap'>
        {
          lastCourses.map((course) => {
            return <HomeCourseCard course={course} key={course.id} />;
          })
        }

      </div>


    </div>
   
  )
}
