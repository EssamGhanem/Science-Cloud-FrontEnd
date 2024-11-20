"use client";

// import React, { useEffect, useState } from 'react'

import { courses } from '@/data';
import VideoPlayer from '@/components/VideoPlayer';
import NextBackButtons from './NextBackButtons';
import SessionSidebar from './SessionSidebar';
import DownloadButton from './DownloadButton';
import Questions from './Questions';
import ScoreBoard from './ScoreBoard';

export default function SessionPage(params: { sessionId: string }) {



  const apiGetSessions = () => {
    return courses[0].sessions;
  }


  const sessions = apiGetSessions();
  const session = sessions[parseInt(params.sessionId) - 1];

  // const [session, setSession] = useState( apiGetSessionById());

  // const [sessions, setSessions] = useState( apiGetSessions());



  const questions = session.MCQ;

  const Idx = parseInt(session.id);
  return (


    <div dir='rtl' className='p-container  flex justify-between max-md:flex-col items-start'>
      <div className='right w-[70%] max-md:w-full '>
        <h2 className='hh2 w-full text-left'>{session.title}</h2>
        <div className=' w-[100%] max-md:h-[60vw] flex flex-col items-center justify-center mb-5 h-[32vw]  '>

          <VideoPlayer url={session.url} />
          <NextBackButtons Idx={Idx} sessionsLength={sessions.length} />


        </div>
        <DownloadButton />
        <Questions questions = {questions} />
      </div>
      
      <div className='left w-[27%] max-md:w-full min-w-[100px] max-md:mt-10 mt-3s ' >


        <SessionSidebar sessions={sessions} />
        <ScoreBoard />

      </div>








    </div>
  )
}
