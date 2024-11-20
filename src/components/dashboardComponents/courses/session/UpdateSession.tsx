"use client";
import { session } from '@/components/types';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'


const schema = z.object({
  title: z.string().min(1,"title is required"),
  url: z.string().min(1,"link is required"),



});

type Inputs = z.infer<typeof schema>;


export default function UpdateSession(params:{session:session}) {
  
  const session = params.session;
  

  const { register, handleSubmit , formState:{errors} } = useForm<Inputs>({defaultValues:session});

  const formSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className=' w-[70%] bg-prime/50 p-5 border-4 rounded-lg max-h-[80vh] overflow-auto'>
      <form action="" onSubmit={handleSubmit(formSubmit)} >
      <p className='text-[20px] text-white font-kanit  text-center'> Edit Session </p>

      
      

          <div className='formCourseDiv'  >
            <label className='formCourseLabel ' >title</label>
            <input dir='rtl' {...register("title")}  className='formCourseInput ' type="text" name='title' />
            {errors.title && <div className=' text-red-500 '> {errors.title.message} </div> }
          </div>

          <div className='formCourseDiv  ' >
            <label className='formCourseLabel ' >Session Link</label>  
            <textarea dir='rtl' {...register("url")} className='formCourseInput h-[100px] md:h-[150px] resize-none p-2' name="description" ></textarea> 
            {errors.url && <div className=' text-red-500 '> {errors.url.message} </div> }
          </div>




          <div className='formCourseDiv flex flex-row justify-around  w-full '>
            <button type='submit' className='bg-prime text-white font-mono max-md:text-[12px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white'>Save Edits </button>
          </div>

      
      
      </form>


    </div>
  )
}







