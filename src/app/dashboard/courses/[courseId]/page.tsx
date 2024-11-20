import React from 'react'
import Course from '@/components/dashboardComponents/courses/course/Course';
import { courses } from '@/data'
export default function page({ params }:

  { params: { courseId: string } }
) {

  const course = courses[parseInt(params.courseId)-1]
  return (
    <>

      <div>is is course number {params.courseId}</div>
        <Course course = {course} />

    </>

  )
}
