"use client";

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';

const schema = z.object({

  email: z.string().email("خطء في الإيميل"),
  password: z.string().min(1, "كلمة المرور مطلوبه")

});
type Inputs = z.infer<typeof schema>


export default function Login() {


  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema)
  });


  const formSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(errors);
    console.log(data)


  }







  return (
    <>
   
   
      <div className='w-full h-[100px]'> </div>
      <p className='hh2 text-prime text-center mb-4'>تسجيل الدخول</p>
      
      {/* login form */}
      <form onSubmit={handleSubmit(formSubmit)} dir='rtl' className='w-[100%] flex flex-col justify-center items-center ' >

        <div className='flex gap-2 max-sm:w-[70%] max-lg:w-[40%] w-[30%]  flex-col  justify-center'>
            {/* email */}
          <div className=' mb-1 w-[100%]'>
            <input  {...register("email")} className='w-[100%]  font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder=' email ' />
            {errors.email && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.email.message} </div>}
          </div>
          {/* password */}
          <div className=' mb-1 w-[100%]'>
            <input   {...register("password")} className='w-[100%]   font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder='كلمة السر' />
            {errors.password && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.password.message} </div>}
          </div>
           {/* submit*/}
          <input type="submit" className=' bg-prime text-white font-cairo p-1 text-lg cursor-pointer ' value={"تسجيل"} />
          <div className='w-full text-prime/70 font-cairo '> ليس لديك حساب؟  <Link href={'/register'} className='text-prime font-bold' > أنشاء حساب </Link></div>
        </div>




      </form>
   
    </>
  )
}
