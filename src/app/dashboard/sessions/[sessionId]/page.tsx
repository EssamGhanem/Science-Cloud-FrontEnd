'use client';
import Session from '@/components/dashboardComponents/courses/session/Session'
import React from 'react'
import { courses } from '@/data';

export default function page(params:{sessionId:string}) {
  
    const sessionId = params.sessionId;
  console.log(sessionId);
  const session = courses[1].sessions[1]; 
return (
  <>
    <div dir='rtl' className='p-container pt-[40px] '>
      <Session session={session} />

    </div>
  </>
)
}
