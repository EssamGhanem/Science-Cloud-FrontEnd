"use client"
import { course } from '@/components/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import SessionsList from '../session/SessionsList';
import Enrolled from './Enrolled';
import JoinBox from './JoinBox';
export default function CourseFound(params: { course: course }) {
  const course = params.course;
  const sessions = course.sessions
  const isEnrolled = false;
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    setEnrolled(isEnrolled);
  }, [])

  return (
    <>
      <div className=' w-full lg:h-[300px]   bg-prime flex justify-end items-end max-lg:p-4 lg:pl-[500px]  pr-[150px] relative '>
        {/* Background Layer */}
        <div className="absolute inset-0 backgroundImgSize max-sm:sm-backgroundImgSize w-full h-full z-0 "
          style={{
            backgroundImage: "url('/home_bg_img.png')",
            opacity: 0.07,
            zIndex: 1,
          }}
        ></div>
        <p className='text-white text-[38px] w-full pb-8 font-cairo text-wrap text-right max-lg:hidden  '>{course.title}</p>

        <div className=' w-full  max-sm:h-[300px] h-[400px] lg:hidden'>

          <p className='text-white text-[32px] max-sm:text-[26px] mb-6  pt-5 font-cairo text-wrap text-center  '>{course.title}</p>

          {/* course Img + JoinBox */}
          <div className='  flex  flex-col gap-5 justify-center items-center   pb-6   rounded-2xl'>
            <Image src={course.image} alt='course-image'
              className=' max-sm:w-[70%] w-[50%]  max-sm:h-[37%]  h-[26%]rounded-2xl z-10 '
              width={240} height={135} />
            {/* enroll box */}


          </div>
        </div>




      </div>


      <div className=' w-full  relative pt-[30px]  flex flex-col justify-between items-center lg:items-end gap-4'>



        {/* course Img + JoinBox */}
        <div className=' max-lg:hidden flex w-[25%] flex-col gap-5  p-2 absolute top-[-150px] z-10 pb-6 left-[100px] bg-white rounded-2xl border-2 border-prime'>
          <Image src={course.image} alt='course-image'
            className=' w-[100%] h-[26%] rounded-2xl '
            width={240} height={135} />
          {/* enroll box */}

          {
            enrolled ? <Enrolled /> : <JoinBox course={course} />
          }

        </div>


        <div dir='rtl ' className='w-[50%] px-[5%]  flex max-lg:items-center max-lg:w-full  flex-col justify-center items-end mb-[100px]' >



          <div className=' w-[49%] h-[200px] lg:hidden'>
            {enrolled ? <Enrolled /> : <JoinBox course={course} />}
          </div>





          {/* course Description */}
          <div dir='rtl' className=' mb-10  text-prime w-full'>
            <p className='hh3 font-bold font-cairo'>عن الدوره</p>
            <p className='hh3 font-cairo text-right block w-full'>{course.description}</p>
          </div>
          {/* course Sessions */}
          <div dir='rtl' className='sessions w-full  rounded-[5px]  '>
            <p className='hh3 font-bold mb-4 font-cairo w-full text-prime '>المحتوي</p>
            <SessionsList sessions={sessions} />
          </div>


        </div>



      </div>







 


    </>
  )
}
