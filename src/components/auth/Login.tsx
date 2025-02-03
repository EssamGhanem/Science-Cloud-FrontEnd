'use client';

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/state/userState/authenticate';

const schema = z.object({

  email: z.string().email("خطء في الإيميل"),
  password: z.string().min(1, "كلمة المرور مطلوبه")

});
type Inputs = z.infer<typeof schema>





export default function Login() {

  const router = useRouter();
  const dispatch = useDispatch();
  const [userNotFound, setUserNotFound] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema)
  });


  const formSubmit: SubmitHandler<Inputs> = async (data) => {

   

    try {

      setUserNotFound(false);
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data.user)

       dispatch(login({user:response.data.user}));

      router.push('/');



    }
    catch (e) {
      console.log(e);
      setUserNotFound(true)
    }


  }







  return (
    <>


      <div className='w-full h-[100px]'> </div>
      <p className='hh2 text-prime text-center mb-4'>تسجيل الدخول</p>

      {/* login form */}
      <form onSubmit={handleSubmit(formSubmit)} dir='ltr' className='w-[100%] flex flex-col justify-center items-center ' >

        <div className='flex gap-2 max-sm:w-[70%] max-lg:w-[40%] w-[30%]  flex-col  justify-center'>
          {/* email */}
          <div className=' mb-1 w-[100%]'>
            <input  {...register("email")} className='w-[100%]  font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder=' email ' />
            {errors.email && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.email.message} </div>}
          </div>
          {/* password */}
          <div className=' mb-1 w-[100%]'>
            <input   {...register("password")} type='password' className='w-[100%]   font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder='كلمة السر' />
            {errors.password && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.password.message} </div>}
          </div>
          {
            userNotFound ? <p dir='rtl' className=' text-red-500 text-[18px] font-cairo  ' > خطاء في الايميل او الباسورد</p> : <></>
          }
          {/* submit*/}
          <input type="submit" className=' bg-prime text-white font-cairo p-1 text-lg cursor-pointer ' value={"تسجيل"} />
          <div className='w-full text-prime/70 font-cairo '> ليس لديك حساب؟  <Link href={'/register'} className='text-prime font-bold' > أنشاء حساب </Link></div>
        </div>




      </form>

    </>
  )
}
