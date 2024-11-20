import React from 'react'
import { course } from '@/components/types'
import Link from 'next/link';

export default function CourseCard(params : {course:course}) {
  
  const course = params.course;

  return (
    <Link href={"./courses/"+course.id}>
    
      <div className=' my-2 flex justify-between p-2 warp bg-black/20 hover:scale-110 duration-300'>
          <h3 className='hh3 w-[50%]'>{course.title}</h3>
          <h3 className='hh3 w-[25%] text-center '>{course.sessions.length}</h3>
          <h3 className='hh3 w-[25%] text-center '>{course.numberOfstudents}</h3>
          
           
      </div>
      </Link>
  )
}
