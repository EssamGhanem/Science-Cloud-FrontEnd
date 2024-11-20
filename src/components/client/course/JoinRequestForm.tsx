import { course } from '@/components/types';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { TiWarning } from "react-icons/ti";
const schema = z.object({

  image: z.any()

});

type Inputs = z.infer<typeof schema>;




export default function JoinRequestForm(params:{course:course}) {

  const course = params.course

  const { register, handleSubmit  } = useForm<Inputs>();

  const formSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div className=' w-[50%] max-md:w-[80%] bg-prime/50 p-5 border-4 rounded-lg max-h-[80vh] overflow-auto'>
      <div className='text-white font-cairo'>
          <h3> أنت الأن تقدم طلب بالانضمام للدوره الأتيه <span className='font-bold bg-black/30 px-2 rounded-lg '>{course.title} </span> </h3>
          <h3> قم بالخطوات التالبه : </h3>
          <p className='p-1'> 1- قم بإرسال مبلغ الدوره و الذي هو <span className=' font-bold px-1 '>{course.price}EG</span> علي الرقم الاتي  <span className='font-bold bg-black/30 px-2 rounded-lg mx-1 '>   01099527248 </span>  VodafonCash/InstaPay      </p>
          <p className='p-1'>2- قم بأخذ لقطة شاشه لعملية التحويل </p>
          <p className='p-1'>3- اضف صورة عملية التحميل بالأسفل  </p>
          <p className='p-1' >4- بعد الضغط علي زر إرسال الطلب سوف يتم التأكد من الطلب و قبوله خلال <span className='font-bold bg-black/30 px-2 rounded-lg mx-1 '>24ساعه</span>  </p>
      </div>
      <div  className='flex text-white font-cairo items-center  '>
          <TiWarning className='text-[24px]  text-red-500 ml-4 ' /> إنبتبه
      </div>
      
      <form action="" onSubmit={handleSubmit(formSubmit)} >

      


          <div className='formCourseDiv bg-white/30 p-2 rounded-lg  relative flex-row justify-center items-center '   >
        
            <input dir='rtl' {...register("image")} className='formCourseInput text-prime border-none inline-block  w-[50%]' type="file" name='image' />
          
         
          </div>


          <div className='formCourseDiv flex flex-row justify-around  w-full '>
            <button type='submit' className='bg-prime text-white max-md:text-[12px] max-md:w-[40%]
             rounded-md p-2 text-center font-cairo text-[18px] w-[30%]  border-2 border-white'> إرسال الطلب </button>
             <button type='submit' className='bg-red-500 text-white  max-md:text-[12px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white font-cairo '>إلغاء</button>

          </div>

      
      
      </form>


    </div>
  )
}
