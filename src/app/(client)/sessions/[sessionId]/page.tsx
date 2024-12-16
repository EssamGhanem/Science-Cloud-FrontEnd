import SessionPage from '@/components/client/session/sessionPage/SessionPage';

import React from 'react'


export default function page({ params }: { params: { sessionId: string } }) {


  return (
           <SessionPage sessionId={params.sessionId} />
  
  )
}
