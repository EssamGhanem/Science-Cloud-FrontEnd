import React from 'react'
import { TbBrandZoom } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { BiSpreadsheet } from "react-icons/bi";
import { LuClock } from "react-icons/lu";
import { FaRegFilePdf } from "react-icons/fa6";
import { PiRankingFill } from "react-icons/pi";
import { GrStatusGood } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa";
export default function Courses() {
  return (
    <div className='w-full flex  flex-col items-center text-white font-cairo '>
      <p className='white text-[32px] text-white font-cairo max-sm:text-[26px] mb-10'>الدورات المسجله</p>

      <div>
        <p className='text-[20px] text-right mb-10'>محاضرات مسجله لشرح المنهج كامل بكل تفاصيلة وحل جميع أنواع الأسئلة والتدريب عليها</p>
     </div>

      <div dir="rtl" className='text-right flex flex-col gap-6  mb-10 text-gray-300'>

        <span> <BiSpreadsheet className='inline text-[22px] text-red-200' /> أسئلة إلكترونية ذاتية التصحيح بعد كل محاضره لتدريب الطالب على حل أسئلة كثيرة متدرجة المستوى من السهل الى المستويات العاليا</span>
        <span><LuClock className='inline text-[22px] text-red-300' />  دلوقتي تقدر تحديد الوقت المناسب لأبنك لمذاكرة وسماع دروسة حتى لو كان ٣ الفجر.</span>
        <span> <FaRegFilePdf className='inline text-[22px] text-red-500' /> كمان معاك مذكرات شرح منظمة للمنهج و مذكرات مراجعة.</span>
        <span><PiRankingFill className='inline text-[22px] text-yellow-600 ' /> دلوقتي مش محتاج تستنى ثانوية عامة علشان تعرف ترتيب ابنك وسط طلاب دفعته وتقدر تعرف مستوى ابنه وسط جميع طلاب الجمهورية.</span>
        <span><FaRegComments className='inline text-[22px] text-green-600' /> الميس هتبقى معاكم دايما للرد على الأسئلة اللي محتاجنها من خلال جروب للمرحلة.</span>
        <span><TbBrandZoom className='inline text-[22px] text-blue-600' /> كمان هتبقى معاكم حصة مباشرة أونلاين كل شهر من خلال برنامج زووم لطلاب كل مرحلة للرد على اي أسئلة أو شرح اي معلومة مازال يحتاج إليها الطالب تتم بالتنسيق وتحديد المعاد مع الطلبة. </span>
        <span> <GrStatusGood className='inline text-[22px] text-blue-600' /> وأخيرًا وليس آخرًا الإنضمام إلى مجتمع طلاب و طالبات <span className='font-kanit text-white text-lg'>Science cloud</span> تحت إشراف ميس أماني للحصول على كثير من المزايا و التطورات والاضافات التي لا تنتهي (وانتظروا المزيد).</span>
        <span><BiSolidOffer className='inline text-[18px] text-red-600' /> كل ده وبإشتراك رمزي أقل من سعر الاشتراك الشهري للمادة يعني هنتفوق وهنوفر.</span>


      </div>

      <button className=' bg-white text-prime p-2 px-8 rounded-lg shadow-2xl animate- '> إشترك الأن</button>




    </div>
  )
}
