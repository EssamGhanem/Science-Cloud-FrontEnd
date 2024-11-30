"use client";


import { courses } from '@/data';
import CourseNotFound from './CourseNotFound';
import Course from './Course';

export default function CoursePage(params: { courseId: string }) {
  const findCourse =courses.find((course)=>course.id===params.courseId)
  

  
  return (

    findCourse == undefined? <CourseNotFound />:<Course course = {findCourse} />

  )
}
