'use client';
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useState, useEffect } from 'react';
import Question from './question/Question';
import { session  } from '@/components/types';



export default function Session(params:{session:session}) {
  

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const session = params.session

  
  
  return (

    <>
      <div className='Session max-sm:justify-center flex-col flex   '>
          
      
      <h1 className=' md:text-[22px] font-cairo font-bold mb-2 '> {session.title} </h1>
          <div className=' p-2 border-[3px] border-black/50   lg:w-[650px] lg:h-[366px] md:w-[400px] md:h-[225px] w-[200px] h-[113px] mb-7  '>
        
        {

            isClient?<ReactPlayer url={session.videoLink} width='100%' height='100%' controls/>:""  
        }
      </div>
      <h2  className='md:text-[22px] font-cairo font-bold mb-2 border-b-2 border-black w-fit'>
        الأسئله:
      </h2>
      <div className='questions '>
        {session.questions?.map((q,idx)=>{
          return <div key = {q._id}>
            <span className='text-[22px] font-bold'>Q {idx+1}</span>
            <Question    question = {q}  />
          </div>
        })}
      </div>

      <div>

      </div>

      
      
    
      </div>
    </>
  )
}
