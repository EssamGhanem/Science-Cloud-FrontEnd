"use client";
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';


const governorates = [
  "الإسكندرية",
  "القاهرة",
  "الجيزة",
  "الإسماعيلية",
  "أسوان",
  "أسيوط",
  "الأقصر",
  "البحر الأحمر",
  "البحيرة",
  "بني سويف",
  "جنوب سيناء",
  "الدقهلية",
  "دمياط",
  "سوهاج",
  "السويس",
  "الشرقية",
  "شمال سيناء",
  "الغربية",
  "الفيوم",
  "القاهرة",
  "القليوبية",
  "قنا",
  "كفر الشيخ",
  "مطروح",
  "المنوفية",
  "المنيا",
  "الوادي الجديد",

];

const acadmicYaers= ["4th Grade","5th Grade","6th Grade"];

const schema = z.object({

  name: z.string().min(10, "اقل عدد من الحروف 10"),
  email: z.string().email("خطاء في الإيميل"),
  acadmicYaer:z.string().min(3,"السنه الدراسيه مطلوبه"),
  schoolName: z.string().min(3, "قل عدد من الحروف 3"),
  governorate: z.string().min(3, "اقل عدد من الحروف 3"),
  city: z.string().min(3, "اقل عدد من الحروف 3"),
  password: z.string().min(8, "اقل عدد من الحروف 8"),
  confirmPassword: z.string().min(8, "اقل عدد من الحروف 8"),


}).refine((data) => data.password === data.confirmPassword, {
  message: " كلمة السر غير متطابقه!",
  path: ["confirmPassword"],
});;

type Inputs = z.infer<typeof schema>

export default function SignUP() {


  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema)
  });



  const formSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(errors);
    console.log(data)


  }

  return (
    <>

      <div dir='rtl' className='w-full flex justify-center mb-6 max-sm:mb-4 items-center flex-col px-[20px] '>
        <h1 className='title text-prime font-cairo text-[28px] max-sm:text-[18px]  text-center  '> مرحباً بك في منصة...  <span className=' font-kanit text-[#0B2F9F] font-bold text-[32px]  max-md:text-[20px]'>&ensp; Science Cloud</span></h1>
        <h3 className=' text-secondary/70 max-sm:text-[15px] text-[18px] font-cairo text-center '> قم بإنشاء حساب الأن و إشترك في العديد من الدورات ... </h3>
      </div>

      <div className='w-[100%] flex flex-col items-center justify-center '>

        <form onSubmit={handleSubmit(formSubmit)} dir='rtl' className='w-[100%] flex flex-col justify-center items-center ' >

          <div className='flex gap-2 max-sm:w-[70%] max-lg:w-[40%] w-[30%]  flex-col  justify-center'>
            <div className=' mb-1 w-[100%]'>
              <input   {...register("name")} className='w-[100%]   font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder='الاسم بالكامل' />
              {errors.name && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.name.message} </div>}
            </div>

            <div className=' mb-1 w-[100%]'>
              <input  {...register("email")} className='w-[100%]  font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder=' email ' />
              {errors.email && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.email.message} </div>}
            </div>
            
            {/* acadmicYaer */}
            <div className=' mb-1 w-[100%]'>
            <input type="text" list='acadmicYaer'  {...register("acadmicYaer")}  className='w-full font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder=' السنه الدراسيه ' />
              <datalist id='acadmicYaer' className=' bg-white max-h-10 w-[400px] '>
                <select className='  font-cairo text-black/50 p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' >
                  
                  {
                    acadmicYaers.map((ele) => {
                      return <option key={ele} value={ele} className='bg-red-500'>{ele}</option>
                    })
                  }

                </select>
              </datalist>

              {errors.acadmicYaer && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.acadmicYaer.message} </div>}



            </div>


            <div className=' mb-1 w-[100%]'>
              <input   {...register("schoolName")} className='w-[100%]   font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder='إسم المدرسه' />
              {errors.schoolName && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.schoolName.message} </div>}
            </div>



            <div className=' mb-1 w-[100%] flex justify-between '>

              <input type="text" list='test'  {...register("governorate")}  className='w-[47%]   font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder=' المحافظه ' />
              <datalist id='test' className=' bg-white max-h-10 w-[400px] '>
                <select className='w-[47%]   font-cairo text-black/50 p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' >
                  
                  {
                    governorates.map((ele) => {
                      return <option key={ele} value={ele} className='bg-red-500'>{ele}</option>
                    })
                  }

                </select>
              </datalist>

              {errors.governorate && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.governorate.message} </div>}


              <input   {...register("city")} className='w-[47%]   font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  '  placeholder=' المدينه'/>
              {errors.city && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.city.message} </div>}
            
            </div>

            <div className=' mb-1 w-[100%]'>
              <input type="password"   {...register("password")} className='w-[100%]   font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder='كلمة السر' />
              {errors.password && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.password.message} </div>}
            </div>

            <div className=' mb-1 w-[100%]'>
              <input type="password"  {...register("confirmPassword")} className='w-[100%]   font-cairo text-prime p-1 px-2 flex items-center border-prime/40 border-2 outline-none  ' placeholder='تأكيد كلمة السر' />
              {errors.confirmPassword && <div className='text-red-600 px-2 font-cairo text-sm '> {errors.confirmPassword?.message} </div>}
            </div>


            <input type="submit" className=' bg-prime text-white font-cairo p-1 text-lg cursor-pointer ' value={"تسجيل"} />
            <div className='w-full text-prime/70 font-cairo '> لديك حساب بالفعل؟  <Link href={'/login'} className='text-prime font-bold' >تسجيل الدخول</Link></div>
          </div>




        </form>


      </div>


    </>
  )
}
