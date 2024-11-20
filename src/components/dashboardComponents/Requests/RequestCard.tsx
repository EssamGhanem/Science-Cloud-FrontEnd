import { request } from '@/components/types'
import { courses, students } from '@/data';
import React from 'react'

export default function RequestCard(params:{request:request}) {
  
  const request = params.request;
  
  const student = students.find((std)=>std.id===request.studentId);
  const course = courses.find((course)=>course.id === request.courseId);

  return (
   <>
    <div dir="rtl" className='w-full p-2  flex justify-between items-center bg-black/20 my-3 '>

      <p>{student?.name}</p>
      <p>{course?.title} </p>

      {
        request.state === "pending" ? 
        <div className='flex justify-between'> 
          <button className=' bg-red-700 font-kanit text-[16px] rounded-lg p-1 text-white mx-2'>Reject</button>
          <button className=' bg-green-700 font-kanit text-[16px] rounded-lg p-1 text-white mx-2 '>Accept</button>
        </div>
        : 
        <p>{request.state}</p>
      }
     


    </div>
   
   </>
  )
}
