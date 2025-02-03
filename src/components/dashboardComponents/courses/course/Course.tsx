"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { course } from '@/components/types';
import EditCourseForm from './EditCourseForm';
import { FaRegWindowClose } from "react-icons/fa";
import Sections from './sections/Sections';
import DeleteCourseForm from './DeleteCourseForm';
// import CourseSessions from './CourseSessions';


export default function Course(params: { course: course }) {

  const course = params.course;
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  


  const setEditeFormChild = (state: boolean) => {
    setOpenEdit(state);
  }  



 
  return (
    <>

      {
        openEdit ?
          <div className=' AbsoluteForm' >
            <button className=' fixed text-white top-[4%] right-[5%]
                        text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
              onClick={() => setOpenEdit(false)} ><FaRegWindowClose />
            </button> {course != null ? <EditCourseForm course={course} setEditeFormChild={setEditeFormChild} /> : <></>}
          </div>
          :
          <></>

      }
            {
        openDelete ?
          <div className=' AbsoluteForm' >
            <button className=' fixed text-white top-[4%] right-[5%]
                        text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
              onClick={() => setOpenDelete(false)} ><FaRegWindowClose />
            </button> {course != null ? <DeleteCourseForm course={course} setOpenDelete={setOpenDelete} /> : <></>}
          </div>
          :
          <></>

      }

      {
        course ?
          <div className='p-container w-full font-cairo  flex-col
            flex sm:justify-start gap-4 justify-center  pt-[40px] mb-10  '  >



            <div className=' flex-col items-center  w-full   border-2 border-black/30 rounded-[5px] flex justify-center  '>
              {/* course img and details */}
              <div className='flex justify-start w-full gap-4 max-sm:flex-col'>
                <Image src={course.image} width={400} height={200} alt='img' className='max-sm:mb-4 rounded-[10px] w-[40%] max-sm:w-[80%] m-4  ' />
                <div className='max-sm:w-full  w-[50%] flex items-start flex-col justify-center gap-4 max-sm:gap-3'  >
                  <h2 className=' text-[22px] font-bold'>{course.title}</h2>
                  <p className='font-bold'>price: {course.price}</p>
                  <p className='font-bold' >students: {course.students.length}</p>
                </div>
              </div>

              {/* edit and delete buttons */}
              <div className='flex items-center justify-around w-full pt-2 my-4  '>
                <button className=' editButton max-sm:w-[50%] w-[25%] ' onClick={() => setOpenEdit(true)}>edit </button>
                <button className='deleteButton max-sm:w-[50%]   w-[25%]' onClick={()=> setOpenDelete(true)}>delete</button>
              </div>
            </div>




            {/* course Sessions */}
            <p className='w-full text-center text-prime font-kanit text-[32px] max-sm:text-[20px]  mb-5  border-b-3 border-prime'>Course content</p>

            <div dir='ltr' className=' flex-col w-full  p-3 border-2 border-black/30 rounded-[5px] flex justify-between'>
             
              <Sections sections={course.sections} course={course} />


            </div>

            {/* course students */}
            <div className='p-4 my-2 border-2 rounded-lg border-black/30' >
              <p className='w-full text-center text-prime font-kanit text-[24px] max-sm:text-[20px] mb-5   '>Course students</p>

            </div>
          </div>
          : <></>
      }
    </>
  )
}
