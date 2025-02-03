import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {z} from 'zod';
import { useRouter } from 'next/navigation';
import axios from 'axios';



const schema = z.object({
  title: z.string().min(5,"too short title")
});

type Inputs = z.infer<typeof schema>;





export default function AddSectionForm(params:{courseId:string , setOpenAddSectionForm:(state:boolean)=>void}) {
  const courseId = params.courseId ;
  const router  = useRouter()
  const {
      register,
      handleSubmit,
      formState:{errors},
  
    } = useForm<Inputs>({
      resolver:zodResolver(schema)
    })
    
    const onSubmit: SubmitHandler<Inputs> = async (data)=>{
      await axios.post("http://localhost:5000/api/sections",{
        title:data.title,
        courseId:courseId

      });
      await params.setOpenAddSectionForm(false);
      router.refresh();
    }

  
  
  return (
    <>
      <div className='flex flex-col justify-center'>
        <h1 className='font-kanit text-[22px] md:text-[32px] my-5 text-white'>Create New Section</h1>
      </div>
      <div dir='ltr' className='flex justify-center w-full mb-20'>
        <form dir='ltr'
          onSubmit={handleSubmit(onSubmit)}
          className='p-4 px-[8%] bg-prime/70 w-[90%] flex justify-center flex-col
          rounded-lg'
        >
          <div className='formCourseDiv' dir='ltr'  >
            <label className='formCourseLabel text-white font-kanit' >Title</label>
            <input  {...register("title")}  className='formCourseInput '  placeholder='new section title' type="text" name='title' />
            {errors.title && <div className='text-red-500 '> {errors.title.message} </div> }
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
