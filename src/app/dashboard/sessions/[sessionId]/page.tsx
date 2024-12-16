'use client';
import Session from '@/components/dashboardComponents/courses/session/Session'
import React from 'react'
import { sessions } from '@/data';

export default function page({ params }:

  { params: { sessionId: string } }
) {
    const session = sessions.find((session)=>session.id === params.sessionId)
  return (
    <>
      <div dir='rtl' className='p-container pt-[40px] '>
        
        {session? <Session session = {session} /> :<></>}

      </div>
    </>
  )
}
