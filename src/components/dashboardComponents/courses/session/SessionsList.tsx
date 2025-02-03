import { session } from '@/components/types'
import React from 'react'
import SessionCard from './SessionCard';

export default function SessionsList(params:{sessions:session[]}) {
  const sessions = params.sessions;
  return (
    <div className='w-full flex flex-col mb-2'>
          {
            sessions.map((session)=>{
              return <div className='w-full' key={session._id}>
                <SessionCard session={session} />
              </div>
            })
          }
    </div>
  )
}
