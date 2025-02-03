"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const schema = z.object({
  title: z.string().min(5),
  description: z.string().min(5),
  price: z.string().min(2),
  image: z
    .any()


});

type Inputs = z.infer<typeof schema>;


export default function AddCourseForm() {



  const router = useRouter();


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },

  } = useForm<Inputs>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('image', data.image[0]); // Access the file from the file input field


    try {


      const response = await axios.post(
        'http://localhost:5000/api/courses',
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        },
      );

      const course = response.data.newCourse;
      router.push('/dashboard/courses/' + course._id);
    }
    catch (e) {
      console.log(e);
    }
  }




  return (

    <>
      <div className='flex justify-center '>
        <h1 className='font-kanit text-[22px] md:text-[32px] my-5 '>Create New Course</h1>
      </div>
      <div className='flex justify-center w-full mb-10' >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='p-4 px-[8%]  w-[90%] flex justify-center flex-col
          rounded-lg'
        >
          <div className='formCourseDiv'  >
            <label className='formCourseLabel font-kanit' >Title</label>
            <input  {...register("title")} className='formCourseInput ' type="text" name='title' placeholder='  title' />
            {errors.title && <div className='text-red-500 '> {errors.title.message} </div>}
          </div>

          <div className='formCourseDiv ' >
            <label className='formCourseLabel font-kanit' >Description</label>
            <textarea  {...register("description")} className='formCourseInput h-[120px] md:h-[150px] resize-none p-2' name="description" placeholder='descripton...' ></textarea>
            {errors.description && <div className='text-red-500 '> {errors.description.message} </div>}
          </div>

          <div className='formCourseDiv ' >
            <label className='formCourseLabel font-kanit' >Price</label>
            <input  {...register("price")} className='formCourseInput ' type="text" name='price' placeholder='$ price' />
            {errors.price && <div className='text-red-500  text-bold'> {errors.price.message} </div>}

          </div>

          <div className='p-2 rounded-lg formCourseDiv bg-white/30 '  >
            <label className='formCourseLabel font-kanit ' >Image</label>
            <input  {...register("image")} className='border-none formCourseInput text-prime ' type="file" name='image' />
            {/* {errors.image && <div className='text-red-400 '> {errors.image.message} </div> } */}
          </div>

          <div className='formCourseDiv '>

            {

             !isSubmitting ? <button type='submit' className='bg-prime text-white  
              rounded-md p-2 text-center w-full text-[22px] font-kanit '>Submit</button>
              :
            <div className='bg-prime text-white rounded-md p-2 text-center w-full text-[22px] font-kanit  flex justify-center items-center gap-2  '><AiOutlineLoading3Quarters className=' animate-spin text-[28px]  mx-4' />Creating...</div>
            }
            

          </div>

        </form>


    </div>


    </>

  )
}
