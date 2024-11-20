"use client";
import React, { useState } from 'react'
import SessionCard from '../session/SessionCard';
import { IoMdAddCircle } from "react-icons/io";
import { course } from '@/components/types';
import AddSesstion from '../session/AddSesstion';
import { FaRegWindowClose } from "react-icons/fa";











export default function CourseSessions(params: { course: course }) {

  const course = params.course;
  const [isOpenAddSession, setOpenAddSession] = useState(false)

  const openAddSession = () => {
    setOpenAddSession(true);
  }
  const closeAddSession = () => {
    setOpenAddSession(false);
  }







  return (
    <>

      <div>
        {
          course.sessions.map((session, idx) => {
            return (
              <>
                <div key={idx}><SessionCard session={session} /></div>
              </>
            )
          })
        }




        <div dir='rtl' className=' w-full flex-col  h-[50px] flex justify-center items-center
         px-[20px] bg-black/20 my-2 p-1 hover:scale-110 duration-300 cursor-pointer ' onClick={() => openAddSession()}>
          <h2 className='font-bold flex items-center'>Add Session</h2>
          <p className='text-[18px] text-black/30 duration-200'> <IoMdAddCircle /> </p>
        </div>

        {
          isOpenAddSession ?
            <div className=' AbsoluteForm ' >
              <button className=' fixed text-white top-[4%] right-[5%]
                        text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
                onClick={() => closeAddSession()} ><FaRegWindowClose />
              </button> <AddSesstion />
            </div>
            :
            <></>
        }





      </div>








    </>
  )
}
