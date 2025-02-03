'use Client'
import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form"
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import api from '@/utils/api';
import { section } from '@/components/types';

const schema = z.object({
  title: z.string().min(5, "too short title")
});

type Inputs = z.infer<typeof schema>;



export default function EditSectionForm(params: { section: section ,setOpenEdit:(state:boolean)=>void}) {
  const section = params.section;
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm<Inputs>({
    defaultValues:section
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try{
      await api.patch(`http://localhost:5000/api/sections/${section._id}`, {
        title: data.title
  
      });
    }catch(e)
    {console.log(e)}

    params.setOpenEdit(false)
    router.refresh();
  }








  return (
    <>
      <div dir='ltr' className='flex flex-col items-center justify-center w-full mb-20'>
      <h1 className='font-kanit text-[22px] md:text-[32px] my-5 text-white'>Edit Section</h1>
        <form dir='ltr'
          onSubmit={handleSubmit(onSubmit)}
          className='p-4 px-[8%] bg-prime/70 w-[90%] flex justify-center flex-col
          rounded-lg'
        >
          <div className='formCourseDiv' dir='ltr'  >
            <label className='formCourseLabel font-kanit' >Title</label>
            <input  {...register("title")} className='formCourseInput ' type="text" name='title' />
            {errors.title && <div className='text-red-500 '> {errors.title.message} </div>}
          </div>





          <div className='formCourseDiv '>
            <button type='submit' className='bg-prime text-white  
             rounded-md p-2 text-center w-full text-[18px] font-kanit shadow-gray-400/50 shadow-sm '>Submit</button>

          </div>

        </form>
      </div>

    </>
  )
}
