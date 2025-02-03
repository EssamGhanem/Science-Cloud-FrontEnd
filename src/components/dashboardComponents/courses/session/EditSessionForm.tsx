"use client";
import { session } from '@/components/types';
import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'


const schema = z.object({
  title: z.string().min(1, "title is required"),
  videoLink: z.string().min(1, "link is required"),



});

type Inputs = z.infer<typeof schema>;


export default function EditSessionForm(params: { session: session ,setOpenEdit:(state:boolean)=>void }) {

  const session = params.session;
  const router =useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ defaultValues: session });

  const formSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await api.patch(
        `http://localhost:5000/api/sessions/${session._id}`,
        { 
          title:data.title,
          videoLink:data.videoLink
        },
        { withCredentials: true })
        console.log(res);
        params.setOpenEdit(false);
        router.refresh();
        
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div dir='ltr' className=' w-[70%] bg-prime/50 p-5 border-4 rounded-lg max-h-[80vh] overflow-auto'>
      <form dir='ltr' onSubmit={handleSubmit(formSubmit)} >
        <p className='text-[20px] text-white font-kanit  text-center'> Edit Session </p>




        <div className='formCourseDiv'  >
          <label className='formCourseLabel ' >title</label>
          <input dir='ltr' {...register("title")} className='formCourseInput ' type="text" name='title' />
          {errors.title && <div className='text-red-500 '> {errors.title.message} </div>}
        </div>

        <div className='formCourseDiv ' >
          <label className='formCourseLabel ' >Session Link</label>
          <textarea  {...register("videoLink")} className='formCourseInput h-[100px] md:h-[150px] resize-none p-2' name="description" ></textarea>
          {errors.videoLink && <div className='text-red-500 '> {errors.videoLink.message} </div>}
        </div>




        <div className='flex flex-row justify-around w-full formCourseDiv '>
          <button type='submit' className='bg-prime text-white font-mono max-md:text-[12px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white'>Save Edits </button>
        </div>



      </form>


    </div>
  )
}







