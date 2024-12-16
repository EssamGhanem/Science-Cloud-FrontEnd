
import React from 'react'
import SessionCard from './SessionCard';
import { sessions } from '@/data';
import { session } from '@/components/types';

export default function SessionsList(params:{sessions:session[]}) {
  

  const courseSessions:session [] = sessions.filter((session)=>params.sessions.includes(session));

  return (
    <div className='w-full' >
        {
          courseSessions.map((session,idx)=>{
            return <SessionCard  session={session} key={idx}   />
          })
        }
    </div>
  )
}
