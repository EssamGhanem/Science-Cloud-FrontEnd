import { session } from '@/components/types'
import React from 'react'
import { IoWarning } from "react-icons/io5";

export default function DeleteSession(params :{session:session}) {
  const session = params.session;
  

  const deleteSession = ()=>{

  }
  
  return (
    <>
    
      <div dir='ltr' className=' w-[70%] bg-prime/50 p-5 border-4 rounded-lg max-h-[80vh] overflow-auto flex flex-col justify-center items-center ' >
     <p className='text-white text-[22px] text-cneter my-2 max-md:text-[18px] max-sm:text-[16px] '>  <IoWarning  className='inline text-red-600 text-[24px] max-md:text-[20px] max-sm:text-[18px]'/>  Are you want to delete this session  <span className='font-cairo font-bold bg-prime/70 px-2 rounded-lg  '>{session.title}</span>  ? </p>
          <div className='formCourseDiv flex flex-row justify-around  w-full '>
            <button  className=' bg-red-500 text-white font-mono max-md:text-[16px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white' onClick={ ()=>{ deleteSession() } }>Delete </button>
             <button  className=' bg-prime text-white font-mono max-md:text-[16px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white'>cancel</button>

          </div>
      </div>
    
    </>
  )
}
