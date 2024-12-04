import React from 'react'
import Link from 'next/link';
import { setQuestionEnd } from '@/state/question/QuesionStart';
import { useDispatch } from 'react-redux'
export default function NextBackButtons(params:{indexOfCurrentSession:number,courseSessionsId:string[]}) {
  
  const indexOfCurrentSession = params.indexOfCurrentSession;
  const courseSessionsId = params.courseSessionsId;

  const nextSessionId =  indexOfCurrentSession === courseSessionsId.length -1 ? -1 : courseSessionsId[indexOfCurrentSession+1]
  const backSessionId = indexOfCurrentSession === 0 ? -1 : courseSessionsId[indexOfCurrentSession -1];
 
  const dispatch = useDispatch();
  const endQuesiton = ()=>{
    dispatch(setQuestionEnd());
  }
 
  return (
    <>
        

    <div className='flex justify-between w-full  '>

    { 
         nextSessionId!=-1?
          <Link href={'/sessions/' + nextSessionId} > <button className=' m-3 px-2 bg-prime rounded-md
           text-white w-[70px]  hover:bg-white hover:text-prime border-prime duration-100 border-2 ' onClick={endQuesiton} >Next</button></Link>
          :
          <p className='m-3 px-2 bg-prime rounded-md text-white' >no next</p>
    }
    {
        backSessionId!=-1?
          <Link href={'/sessions/' + backSessionId} ><button className='m-3 px-2 bg-prime rounded-md text-white w-[70px] hover:bg-white hover:text-prime 
          duration-100 border-prime border-2 ' onClick={endQuesiton} >Back</button></Link>
          :
          <p className='m-3 px-2 bg-prime rounded-md text-white' >no Back</p>
      }


    </div>
    

    
    
    </>
  )
}
