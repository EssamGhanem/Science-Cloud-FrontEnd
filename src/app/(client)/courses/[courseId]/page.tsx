import CoursePage from '@/components/client/course/CoursePage'
import React from 'react'

export default function page({params}:{params:{courseId:string}}) {
  console.log(params.courseId);
  return (
    
    <div>
      <CoursePage courseId={params.courseId}/>
    </div>
  )
}
