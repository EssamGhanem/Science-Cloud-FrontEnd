import { course } from '@/components/types'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
export default function HomeCourseCard(params: { course: course }) {

  const course = params.course;



  return (

    <Link href={"/courses/" + course.id} className='  flex flex-col w-[30%] max-md:w-[40%] max-sm:w-[80%]  h-full p-2 bg-gradient-to-t outline-[1px] outline outline-transparent   hover:outline-prime shadow-xl duration-500 hover:from-prime/30 relative top-0 hover:top-[-20px] from-prime/20 to-white font-cairo mb-12 rounded-2xl '>

      

        {/* img (top) */}
        <div className='pb-4 rounded-2xl ' >
          <Image src={course.image} alt='img' width={200} height={200} className=' w-full rounded-t-2xl' />
        </div>
        {/* text (bottom)  */}
        <div>
          {/* title & description */}
          <div className='mb-10 px-4'>
            <h1 className='hh2 pb-8'>{course.title}</h1>
            <p className='text-black/60'>{course.description}</p>
          </div>
          {/* price & details */}
          <div className='flex w-full justify-end  px-8 py-5 relative  ' >



            <button className='hh3 bg-secondary/50 p-1 px-4 text-white rounded-lg absolute left-[32px] top-[20px] hover:top-[14px] shadow-black duration-200 hover:shadow-lg'>التفاصيل</button>

            <p dir='rtl' className='hh2  text-prime  text-center  ' >{course.price} <span className='hh3'>ج.م</span></p>





          </div>
        </div>
     
    </Link>
  )
}
