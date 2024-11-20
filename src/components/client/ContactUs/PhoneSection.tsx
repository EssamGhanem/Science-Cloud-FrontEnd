import Image from 'next/image'
import React from 'react'
import img from '../../../../public/contactUs/ContactUs1.png'


export default function PhoneSection() {
  return (
    <div dir='ltr' className='w-full h-[56vh] bg-prime/90 p-2 px-[10%] max-sm:px-[5%] flex justify-between max-md:justify-around items-center '>
    <Image src={img} alt='img' className='w-[28%] max-md:hidden ' />


    <div className=' w-[53%] h-[50%] py-4 flex flex-col justify-center items-center border-2 border-white rounded-lg p-4 max-md:w-[80%]  max-sm:w-full'>
      <h3 className=' text-white font-cairo text-[22px] mb-4  '> تواصل معانا  </h3>
      <div dir='rtl' className='w-full flex justify-between mb-3'><p className=' text-white text-[18px] max-sm:text-[16px] font-cairo '> الهاتف </p> <p dir='ltr' className='text-white text-[18px] font-cairo max-sm:text-[16px] bg-prime/80 px-2 rounded'> +201099527247 </p> </div>
      <div dir='rtl' className='w-full flex justify-between'><p className=' text-white text-[18px] max-sm:text-[16px] font-cairo '> الإيميل </p> <p dir='ltr' className='text-white text-[18px] font-cairo max-sm:text-[16px] bg-prime/80 px-2 rounded'> science.cloud@gmail.com </p> </div>

    </div>

  </div>
  )
}
