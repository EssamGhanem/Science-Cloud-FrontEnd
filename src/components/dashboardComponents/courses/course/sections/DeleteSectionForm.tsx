import { section } from '@/components/types'
import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function DeleteSectionForm(params: { section: section , setOpenDelete:(state:boolean)=>void}) {
  
  const section = params.section;
  const router = useRouter();
  
  const deleteSection = async (sectionId: string) => {
    try {
      await api.delete('http://localhost:5000/api/sections/' + sectionId);
      params.setOpenDelete(false);
      router.refresh();
  
    } catch (e) {
      console.log("cant delete the section");
    }
  
  }

  


  return (
    <div className='flex flex-col justify-center max-md:w-[60%] max-sm:w-[70%] w-[40%]'>
      <h1 className='font-kanit text-center text-[34px] md:text-[32px] my-5 text-white'>Delete Section</h1>
      <div className='p-4 px-[8%] bg-prime/70 w-[90%] flex justify-center flex-col rounded-lg'>
        <div className='formCourseDiv' dir='ltr'>
          <p className=' text-white font-kanit text-[22px]'>Are you sure you want to delete <span className='font-bold text-[24px] px-2 rounded-2xl bg-white/30 '>{section.title}</span>  </p>
        <p className='text-gray-400'> all the related sessions will be deleted</p>
          </div>
        <div className='flex justify-center'>
          <button onClick={()=>deleteSection(section._id)} className='deleteButton' type='submit'>Delete</button>
          <button onClick={()=>params.setOpenDelete(false)}  className='editButton' type='submit'>Cancel</button>
        </div> 
      </div>
    </div>
  )
}
