

import SessionPage from '@/components/dashboardComponents/courses/session/SessionPage'

import axios from 'axios';
import React from 'react'

async function getSession(id: string) {

  try{
   const res = await axios.get(`http://localhost:5000/api/sessions/`+id);
   return res.data;

  }catch(e){
   console.log("error in fetching");
  }
 
 }
 


export default async function page({ params }:{ params: { sessionId: string } }){


  const data = await getSession(params.sessionId);
  const session = data.session;
  const questions = data.questions
  
  

  
    return (
    <>
      <div  className=' pt-[40px] '>
        
        {session? <SessionPage session = {session }  questions={questions}/> :<></>}

      </div>
    </>
  )
}
