"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { course } from '@/components/types';
import EditCourseForm from './EditCourseForm';
import { FaRegWindowClose } from "react-icons/fa";
import CourseSessions from './CourseSessions';
import CourseStudents from './CourseStudents';
import { students } from '@/data';

export default function Course(params: { course: course }) {
  const course = params.course;
  const [openEdit, setOpenEdit] = useState(false)

  const openEditeForm = () => {
    setOpenEdit(true);
  }
  const closeEditeForm = () => {
    setOpenEdit(false);
  }

  const courseStudents =   course.students.map((stdIdx) => {
   return  students.find((std) => std.id == stdIdx);
   
  })






  return (
    <>

      {
        openEdit ?
          <div className=' AbsoluteForm ' >
            <button className=' fixed text-white top-[4%] right-[5%]
                        text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
              onClick={() => closeEditeForm()} ><FaRegWindowClose />
            </button> <EditCourseForm course={course} />
          </div>
          :
          <></>

      }
      <div dir='rtl' className='p-container w-full font-cairo  flex-col
    flex sm:justify-start gap-4 justify-center  pt-[40px]   '  >




        {/* course img and details */}
        <div className=' sm-flex-col  w-full  p-3 border-2 border-black/30 rounded-[5px]
       flex justify-between
       max-sm:flex-col '>

          <Image src={course.image} width={400} height={200} alt='img' className='max-sm:mb-4 rounded-[10px]
        w-[40%] max-sm:w-[80%] m-auto'/>

          <div className='max-sm:w-full  w-[50%] flex items-start flex-col justify-center gap-4 max-sm:gap-3'  >
            <h2 className=' text-[22px] font-bold'>{course.title}</h2>
            <p>السعر : {course.price}</p>
            <p>عدد السيشن: {course.sessions.length}</p>
            <p>عدد الطلاب: {course.numberOfstudents}</p>
          </div>

          <button className=' px-4 border-2 bg-blue-300 font-kanit py-4
         hover:border-black duration-300 my-[20px] rounded-lg ' onClick={() => openEditeForm()}>
            Edit  </button>


        </div>


        <div className=' my-2 p-4 border-black/30 border-2 rounded-lg'>
          {/* course sessions */}
          <p className='w-full text-center text-prime font-kanit text-[24px] max-sm:text-[20px]   '>Sessions</p>
          <CourseSessions course={course} />
        </div>

        {/* course students */}
        <div className=' my-2 p-4 border-black/30 border-2 rounded-lg' >
          <p className='w-full text-center text-prime font-kanit text-[24px] max-sm:text-[20px]   '>Course students</p>
          <CourseStudents students = {courseStudents} />
        </div>
      </div>
    </>
  )
}
