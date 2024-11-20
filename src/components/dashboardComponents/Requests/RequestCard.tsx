import { request } from '@/components/types'
import { courses, students } from '@/data';
import Image from 'next/image';
import React from 'react'

export default function RequestCard(params:{request:request}) {
  
  const request = params.request;
  
  const student = students.find((std)=>std.id===request.studentId);
  const course = courses.find((course)=>course.id === request.courseId);

  return (
   <>
    <div dir="rtl" className='w-full p-2  flex justify-between items-center bg-black/20 my-3 '>

      <p className='font-cairo text-[16px]'>{student?.name}</p>
      <p className='font-cairo text-[16px]'>{course?.title} </p>
      <p className='font-cairo text-[16px]'>{course?.price} EG </p>
      <Image src={request.img} alt='img'  width={50} height={50}/>

      {
        request.state === "pending" ? 
        <div className='flex justify-between'> 
          <button className=' bg-red-700 font-kanit text-[16px] rounded-lg px-2 text-white mx-2'>Reject</button>
          <button className=' bg-green-700 font-kanit text-[16px] rounded-lg px-2 text-white mx-2 '>Accept</button>
        </div>
        : 
        <p>{request.state}</p>
      }
     


    </div>
   
   </>
  )
}
