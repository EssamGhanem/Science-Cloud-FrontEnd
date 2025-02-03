import React from 'react'
import { course } from '@/components/types'
import Link from 'next/link';

export default function CourseCard(params : {course:course}) {
  
  const course = params.course;

  const numberOfSessions= course.sections.map((sec)=>sec.sessions.length).reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  return (
    <Link href={"./courses/"+course._id}>
    
      <div className='flex justify-between p-2 my-2 duration-300  warp bg-black/20 hover:scale-110'>
          <h3 className='hh3 w-[50%]'>{course.title}</h3>
          <h3 className='hh3 w-[25%] text-center '>{numberOfSessions}</h3>
          <h3 className='hh3 w-[25%] text-center '>{course.students.length}</h3>
          
           
      </div>
      </Link>
  )
}
