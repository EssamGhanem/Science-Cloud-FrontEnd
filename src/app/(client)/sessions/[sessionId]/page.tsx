'use client';
import SessionPage from '@/components/client/session/sessionPage/SessionPage';

import { session } from '@/components/types';
import axios from 'axios';
import React from 'react'

async function getSession(id: string) {

  try {
    const res = await axios.get(`http://localhost:5000/api/sessions/` + id);
    const session: session = res.data.session;
    return session;

  } catch (e) {
    console.log("error in fetching");
    return ;
  }

}
export default async function page({ params }: { params: { sessionId: string } }) {
  
  const session = await getSession(params.sessionId);



  return (
    <>
     { session&& <SessionPage session={session} /> }
    </>
  )
}
