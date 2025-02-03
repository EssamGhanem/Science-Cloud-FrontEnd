"use client";
import { course } from '@/components/types';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image';
import axios from 'axios';
import {useRouter} from 'next/navigation';
const schema = z.object({
  title: z.string().min(5),
  description: z.string().min(5),
  price: z.string().min(2),
  image: z.any()


});

type Inputs = z.infer<typeof schema>;



export default function EditCourseForm(params: { course: course , setEditeFormChild:(newState: boolean) => void  }) {

  const course = params.course;
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ defaultValues: course });




  const formSubmit: SubmitHandler<Inputs> = async (data) => {

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('image', data.image[0]); // Access the file from the file input field
    console.log(formData);

    try {


       await axios.patch(
        'http://localhost:5000/api/course/'+ course._id ,
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        },
      );
      params.setEditeFormChild(false)
      router.refresh();
    
    }
    catch (e) {
      console.log(e);
    }
  }



  return (
    <div className=' w-[70%] max-sm:w-[85%] bg-prime/50 p-5 border-4 rounded-lg max-h-[80vh] overflow-auto'>
      <form action="" onSubmit={handleSubmit(formSubmit)} >



        <div className='formCourseDiv'  >
          <label className='formCourseLabel ' >title</label>
          <input  {...register("title")} className='formCourseInput ' type="text" name='title' />
          {errors.title && <div className='text-red-500 '> {errors.title.message} </div>}
        </div>

        <div className='formCourseDiv ' >
          <label className='formCourseLabel ' >Description</label>
          <textarea {...register("description")} className='formCourseInput h-[100px] md:h-[150px] resize-none p-2' name="description" ></textarea>
          {errors.description && <div className='text-red-500 '> {errors.description.message} </div>}
        </div>

        <div className='formCourseDiv ' >
          <label className='formCourseLabel ' >Price</label>
          <input   {...register("price")} className='formCourseInput ' type="text" name='price' />
          {errors.price && <div className='text-red-500 text-bold'> {errors.price.message} </div>}

        </div>

        <div className='relative flex-row items-center justify-center p-2 rounded-lg formCourseDiv bg-white/30 '   >
          <Image src={course.image} alt="courseImg" width={200} height={200}  className=' max-sm:w-[50%] w-[30%]' />
          {/* <label className='formCourseLabel ' >Image</label> */}
          <input  {...register("image")} className='formCourseInput text-prime border-none inline-block  w-[50%]' type="file" name='image' />
          {/* {errors.image && <div className='text-red-400 '> {errors.image.message} </div> } */}

        </div>


        <div className='flex flex-row justify-around w-full formCourseDiv '>
          <button type='submit'  className='bg-prime text-white font-mono max-md:text-[12px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white'>Save Edits </button>
          <button onClick={ ()=>params.setEditeFormChild(false) }className='bg-red-500 text-white font-mono max-md:text-[12px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white'>cancel</button>

        </div>



      </form>


    </div>
  )
}
