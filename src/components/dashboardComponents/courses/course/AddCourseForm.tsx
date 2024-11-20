"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {z} from 'zod';
import {useRouter} from 'next/navigation';
// const MAX_UPLOAD_SIZE = 1024 * 1024 * 3 * 2 *2; // 3MB
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];



const schema = z.object({
  title: z.string().min(5),
  description: z.string().min(5),
  price: z.string().min(2),
  image:z
  .any()


});

type Inputs = z.infer<typeof schema>;


export default function AddCourseForm() {

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState:{errors},

  } = useForm<Inputs>({
    resolver:zodResolver(schema)
  })
  
  const onSubmit: SubmitHandler<Inputs> = (data)=>{
    console.log(data.image.length)
    router.push('/dashboard/courses/1')
  }
  
  return (

    <>
      <div className='flex justify-center'>
        <h1 className='font-kanit text-[22px] md:text-[32px] my-5 '>Create New Course</h1>
      </div>
      <div className='flex justify-center w-full'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-4 px-[8%] bg-prime/90 w-[70%] flex justify-center flex-col
          rounded-lg'
        >
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

          <div className='formCourseDiv bg-white/30 p-2 rounded-lg '  >
            <label className='formCourseLabel ' >Image</label>
            <input dir='rtl' {...register("image")} className='formCourseInput text-prime border-none ' type="file" name='image' />
            {/* {errors.image && <div className=' text-red-400 '> {errors.image.message} </div> } */}
          </div>

          <div className='formCourseDiv'>
            <button type='submit' className='bg-prime text-white font-mono
             rounded-md p-2 text-center w-full text-[18px] '>Submit</button>

          </div>

        </form>
      </div>


    </>

  )
}
