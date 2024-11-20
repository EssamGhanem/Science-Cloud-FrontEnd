import React from 'react'
import Link from 'next/link';
import { setQuestionEnd } from '@/state/question/QuesionStart';
import { useDispatch } from 'react-redux'
export default function NextBackButtons(params:{Idx:number,sessionsLength:number}) {
  
  const Idx = params.Idx;
  const sessionsLength = params.sessionsLength;
 
  const dispatch = useDispatch();
  const endQuesiton = ()=>{
    dispatch(setQuestionEnd());
  }
 
  return (
    <>
        

    <div className='flex justify-between w-full  '>

    { 
        Idx < sessionsLength ?
          <Link href={'/sessions/' + (Idx + 1)} > <button className=' m-3 px-2 bg-prime rounded-md
           text-white w-[70px]  hover:bg-white hover:text-prime border-prime duration-100 border-2 ' onClick={endQuesiton} >Next</button></Link>
          :
          <p className='m-3 px-2 bg-prime rounded-md text-white' >no next</p>
    }
    {
        Idx != 1 ?
          <Link href={'/sessions/' + (Idx - 1)} ><button className='m-3 px-2 bg-prime rounded-md text-white w-[70px] hover:bg-white hover:text-prime 
          duration-100 border-prime border-2 ' onClick={endQuesiton} >Back</button></Link>
          :
          <p className='m-3 px-2 bg-prime rounded-md text-white' >no Back</p>
      }


    </div>
    

    
    
    </>
  )
}
