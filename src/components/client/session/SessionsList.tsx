
import React from 'react'
import SessionCard from './SessionCard';

import { session } from '@/components/types';

export default function SessionsList(params:{sessions:session[]}) {
  

const sessions = params.sessions

  return (
    <div className='w-full' >
        {
          sessions.map((session,idx)=>{
            return <SessionCard  session={session} key={idx}   />
          })
        }
    </div>
  )
}
