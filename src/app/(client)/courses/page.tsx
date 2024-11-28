import CourseList from '@/components/client/course/CourseList'
import React from 'react'
import { courses } from '@/data'
export default function CoursesPage() {
  

  return (
    <>

      <div dir='rtl' className=' '>
        <CourseList courses={courses} />
      </div>

    </>
  )
}
