"use client";

// import React, { useEffect, useState } from 'react'

import {  courses, groups, questions, sessions } from '@/data';
import VideoPlayer from '@/components/VideoPlayer';
import NextBackButtons from './NextBackButtons';
import SessionSidebar from './SessionSidebar';
import DownloadButton from './DownloadButton';
import Questions from './Questions';
import ScoreBoard from './ScoreBoard';



export default function SessionPage(params: { sessionId: string }) {

  // find session by id
  const session = sessions.find(session => session.id === params.sessionId) ;
  // find course by id
  const course = courses.find(course=>course.id===session?.courseId);
  // get course Session from groups 
  const courseGroups = course?groups.filter(group=> course.groupsId.includes(group.id)):undefined;
  const CourseSessionsId = courseGroups? courseGroups.map(g=>g.sessions).flat(1):[];


  
  
  //add course session to global state

  

  // const practiceQuesitons= questions.filter(question=> session?.MCQId.includes(question.id) );

 
  return (
<>
    {
      session==undefined ? <></>:    <div dir='rtl' className='p-container  flex justify-between max-md:flex-col items-start'>
      <div className='right w-[70%] max-md:w-full '>
        <h2 className='hh2 w-full text-left text-prime mb-4 pl-2'>{session.title}</h2>
        <div className=' w-[100%] max-md:h-[60vw] flex flex-col items-center justify-center mb-5 h-[32vw]  '>

          <VideoPlayer url={session.url} />
          <NextBackButtons currentSessionId = {session.id} courseSessionsId={CourseSessionsId} />


        </div>
        <DownloadButton />
        <Questions questions = {questions} />
      </div>
      
      <div className='left w-[27%] max-md:w-full min-w-[100px] max-md:mt-10 mt-3s ' >


        <SessionSidebar sessions={sessions} />
        <ScoreBoard />

      </div>








    </div>
    }


 </>
  )
  
 
}
