"use client";

import CourseNotFound from './CourseNotFound';
import Course from './Course';
import { course } from '@/components/types';

export default function CoursePage(params: { course: course }) {

  const course = params.course ;

  

  
  return (

    course == undefined? <CourseNotFound />:<Course course = {course} />

  )
}
