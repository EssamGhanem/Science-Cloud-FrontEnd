
import AddCourse from '@/components/dashboardComponents/courses/course/AddCourse'
import CoursesList from '@/components/dashboardComponents/courses/course/CoursesList'

import React from 'react'

export default function page() {
  

  
  return (
    <div className='flex flex-col justify-center p-5 md:p-10 items-center '>
        <AddCourse/> 
        <CoursesList />    
    </div>
  )
}
