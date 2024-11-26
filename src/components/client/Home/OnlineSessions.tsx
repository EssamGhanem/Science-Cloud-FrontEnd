import React from 'react'
import { TbBrandZoom } from "react-icons/tb";
import { MdGroups } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BiRevision } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { HiOutlineGift } from "react-icons/hi2";
import { MdOutlinePriceCheck } from "react-icons/md";
import { PiExam } from "react-icons/pi";

export default function OnlineSessions() {
  return (
    <div className='w-full flex  flex-col items-center font-cairo lg:pr-8 mb-4'>
      <p className='white text-[32px] mb-10 text-prime font-cairo max-sm:text-[26px]'>المحاضرات الاون لاين</p>
      <p className='text-[20px] text-right mb-10'>إشتراك بحصص مباشرة أونلاين من خلال تطبيق زووم لشرح المنهج كاملا في مجموعات محدودة العدد باشتراك شهري مناسب </p>
     
     
     <div dir="rtl" className='text-right flex flex-col gap-6 text-black/50 mb-10'>

        <span> <TbBrandZoom className='inline text-[22px] text-blue-600'/> التفاعل مع المعلمة بشكل مباشر من خلال الحصص الاونلاين وسماع شرح الدروس المقسمة بشكل مناسب</span>
        <span><PiExam className='inline text-[22px] text-blue-600'/> حل أسئلة على الجزء المشروح كل حصة</span>
        <span> <BiRevision className='inline text-[22px] text-blue-600'/> مراجعات وامتحانات دورية</span>
        <span><SlCalender className='inline text-[22px] text-blue-600'/> مواعيد منتظمة (حصتين بالاسبوع)</span>
        <span><MdGroups className='inline text-[22px] text-blue-600'/> أعداد محدودة بالمجموعة</span>
        <span><MdOutlinePriceCheck className='inline text-[22px] text-green-600'/> إشتراك مناسب جدا جدا</span>
        <span> <BiSolidOffer className='inline text-[22px] text-red-600'/> خصم ٥٠٪ لمن أراد الإشتراك بالكورس المسجل أونلاين بالمنصة</span>
        <span><HiOutlineGift className='inline text-[18px] text-orange-600'/> جائزة في نهاية الفصل الدراسي للأوائل في للمجموعة.</span>


      </div>
        
          <button className=' bg-prime text-white p-2 px-8 rounded-lg shadow-2xl animate- '> إحجز الأن</button>

    </div>
  )
}
