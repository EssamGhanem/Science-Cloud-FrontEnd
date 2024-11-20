import React from 'react'
import { courses} from '@/data'
import CourseCard from './CourseCard';


export default function CourseList() {
  const coursesList = courses;
  
  return (
    <div>
      {coursesList.map((course)=>{
        return <CourseCard course={course} key={course.id}/>
      })}
    </div>
  )
}
