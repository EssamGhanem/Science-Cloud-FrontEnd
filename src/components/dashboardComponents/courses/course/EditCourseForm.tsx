"use client";
import { course } from '@/components/types';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image';


const schema = z.object({
  title: z.string().min(5),
  description: z.string().min(5),
  price: z.string().min(2),
  image: z.any()


});

type Inputs = z.infer<typeof schema>;




export default function EditeCourseForm(params:{course:course}) {

  const course = params.course;

  const { register, handleSubmit , formState:{errors} } = useForm<Inputs>({defaultValues:course});

  const formSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className=' w-[70%] bg-prime/50 p-5 border-4 rounded-lg max-h-[80vh] overflow-auto'>
      <form action="" onSubmit={handleSubmit(formSubmit)} >

      

          <div className='formCourseDiv'  >
            <label className='formCourseLabel ' >title</label>
            <input dir='rtl' {...register("title")}  className='formCourseInput ' type="text" name='title' />
            {errors.title && <div className=' text-red-500 '> {errors.title.message} </div> }
          </div>

          <div className='formCourseDiv  ' >
            <label className='formCourseLabel ' >Description</label>  
            <textarea dir='rtl' {...register("description")} className='formCourseInput h-[100px] md:h-[150px] resize-none p-2' name="description" ></textarea> 
            {errors.description && <div className=' text-red-500 '> {errors.description.message} </div> }
          </div>

          <div className='formCourseDiv ' >
            <label className='formCourseLabel ' >Price</label>
            <input dir='rtl'  {...register("price")} className='formCourseInput ' type="text" name='price' />
            {errors.price && <div className=' text-red-500 text-bold '> {errors.price.message} </div> }
            
          </div>

          <div className='formCourseDiv bg-white/30 p-2 rounded-lg  relative flex-row justify-center items-center '   >
          <Image src={course.image}  alt="courseImg" width={200} height={200} dir='rtl' className='w-[20%]' />
            {/* <label className='formCourseLabel ' >Image</label> */}
            <input dir='rtl' {...register("image")} className='formCourseInput text-prime border-none inline-block  w-[50%]' type="file" name='image' />
            {/* {errors.image && <div className=' text-red-400 '> {errors.image.message} </div> } */}
         
          </div>


          <div className='formCourseDiv flex flex-row justify-around  w-full '>
            <button type='submit' className='bg-prime text-white font-mono max-md:text-[12px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white'>Save Edits </button>
             <button type='submit' className='bg-red-500 text-white font-mono max-md:text-[12px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white'>cancel</button>

          </div>

      
      
      </form>


    </div>
  )
}
