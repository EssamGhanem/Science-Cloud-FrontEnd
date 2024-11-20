"use client";

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  title: z.string().min(1,"title is required"),
  url: z.string().min(10,"session link is required")

});

type Inputs = z.infer<typeof schema>;




export default function AddSesstion() {

  

  const { register, handleSubmit , formState:{errors} } = useForm<Inputs>({
    resolver:zodResolver(schema)
  });

  const formSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log(errors);
  }

  return (
    <div className=' w-[70%] bg-prime/50 p-5 border-4 rounded-lg max-h-[80vh] overflow-auto'>
        <p className='text-[20px] text-white font-kanit  text-center'>Adding a new session </p>
      
      <form  onSubmit={handleSubmit(formSubmit)} >

      

          <div className='formCourseDiv'  >
            <label className='formCourseLabel ' >title</label>
            <input dir='rtl' {...register("title")}  className='formCourseInput ' type="text"  />
            {errors.title && <div className=' text-red-500 '> {errors.title.message} </div> }
          </div>



          <div className='formCourseDiv ' >
            <label className='formCourseLabel ' >Session Link</label>
            <input dir='rtl'  {...register("url")} className='formCourseInput ' type="text" />
            {errors.url && <div className=' text-red-500 text-bold '> {errors.url.message} </div> }
            
          </div>


          <div className='formCourseDiv flex flex-row justify-around  w-full '>
            <button type='submit' className='bg-prime text-white font-mono max-md:text-[12px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white'> Add </button>
      
          </div>

      
      
      </form>


    </div>
  )
}
