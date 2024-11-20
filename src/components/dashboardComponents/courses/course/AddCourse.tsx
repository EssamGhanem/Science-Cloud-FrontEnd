import React from 'react'
import Link from 'next/link'
import { IoMdAddCircle } from "react-icons/io";
export default function CreateCourses() {
  return (


      <Link 
        href = {'/dashboard/create-course'}
        className =' w-[90%] md:h-[15vw] h-[30vw] bg-white/50 
                    rounded-[20px] border-black/30 border-solid border-[5px]
                    hover:border-black/70 duration-200
                    flex flex-col justify-center items-center group
                    '  >
        <h2 className='font-kanit text-[28px] hh3
         text-black/30 group-hover:text-black/70 duration-200'>Create Course</h2>
      <p className='text-[28px] text-black/30 group-hover:text-black/70 duration-200'> <IoMdAddCircle /> </p>
      </Link>
   
  )
}
