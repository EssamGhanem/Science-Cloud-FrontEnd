import React from 'react'

import CourseCard from './CourseCard';
import { course } from '@/components/types';


export default function CourseList(params :{courses:course[]}) {
  const coursesList = params.courses;
  
  return (
    <div>
      {coursesList.map((course)=>{
        return <CourseCard course={course} key={course.id}/>
      })}
    </div>
  )
}
