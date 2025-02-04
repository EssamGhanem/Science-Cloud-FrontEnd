// import Link from 'next/link'
import BuyButton from '@/components/helpers/BuyButton';
import { course } from '@/components/types'
import React from 'react'

export default function JoinBox(params: { course: course }) {
  const course = params.course;

  return (

    <div dir='rtl' className='px-4  max-md:px-1 rounded-[5px] mb-4 font-cairo pb-6  -2 flex flex-col   duration-300   ' >

      <div className='bg-prime/80 rounded-xl px-4 w-full mb-4'>
        <p className='hh2   w-full text-white  text-center p-2  ' >
          {course.price} <span className='hh3 '>ج.م</span>
        </p>
      </div>

      <div className=' w-full  flex justify-center  '>
        {/* <button className=' before:content-[""] before:w-[1000px] before:z-[0] before:h-[1000px] before:top-0  before:bg-prime px-5 bg-white before:absolute before:translate-x-[-4 0px] hover:text-white overflow-hidden before:duration-500 hover:before:translate-x-[200px] duration-300 hover:before:rotate-90 hover:before:top-[-100px]   relative before:rotate-45   w-full p-1 border-prime border-2 rounded-lg font-cairo text-[26px] max-lg:text-[22px] max-md:[16px] font-bold text-prime ' > <span className=' z-[1] relative'>شراء الأن</span></button>*/}
        <BuyButton course = { course} />
      </div> 


    </div>

  )
}
