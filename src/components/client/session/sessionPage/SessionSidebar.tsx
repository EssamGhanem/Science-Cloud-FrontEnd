import React from 'react'
import SessionsList from '../SessionsList'
import { session } from '@/components/types'


export default function SessionSidebar(params:{sessions: session[]}) {
  
  const sessions = params.sessions
  return (
    <div className='w-full p-2 border-2 h-full  '>
      <h3 className='w-full border-b-2 border-black pb-2 font-cairo text-[18px] font-bold  text-center 
      max-sm:text-[12px] mb-4 '>
        المحتوي
      </h3>

      <SessionsList sessions={sessions} />
    </div>
  )
}
