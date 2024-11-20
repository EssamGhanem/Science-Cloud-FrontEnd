import { student } from '@/components/types'
import React from 'react'

export default function CourseStudentCard(params:{student:student}) {
  const student = params.student;
  
  return (

    <>
        <div dir="rtl" className=' w-full py-1 px-3 flex justify-between items-center '>
                <div>{student.name}</div>
                <div> 
                    <button className=' p1 px-2 text-white bg-red-500 '> طرد </button>
                </div>
        </div>

    </>
  
  )
}
