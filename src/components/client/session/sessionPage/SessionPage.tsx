"use client";

// import React, { useEffect, useState } from 'react'

import { session } from '@/components/types';
import VideoPlayer from '@/components/VideoPlayer';
// import NextBackButtons from './NextBackButtons';
// import SessionSidebar from './SessionSidebar';
import DownloadButton from './DownloadButton';
// import Questions from './Questions';
import ScoreBoard from './ScoreBoard';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import QuizzResultPage from '../quizz/QuizzResultPage';



export default function SessionPage(params: { session: session }) {


  const session = params.session;
  const quizz = params.session.quizz;
  const user = useSelector((state: RootState) => state.userAuthentication.user);





  return (
    <>
      {
        session == undefined ? <></> : <div dir='rtl' className='p-container  flex justify-between max-md:flex-col items-start'>
          <div className='right w-[70%] max-md:w-full '>
            <h2 className='hh2 w-full text-left text-prime mb-4 pl-2'>{session.title}</h2>
            <div className=' w-[100%] max-md:h-[60vw] flex flex-col items-center justify-center mb-5 h-[32vw]  '>

              <VideoPlayer url={session.videoLink} />
              {/* <NextBackButtons currentSessionId = {session._id} courseSessionsId={session._id} /> */}


            </div>

         

            {/* Quizz */}

            <div dir='ltr' className='w-full flex items-center justify-center text-center my-4 '>

              {user && quizz && !user?.quizzes.includes(quizz._id) ? <Link  target="_blank" className='w-full border-prime border-2 p-2 rounded-lg'  href={`/quizz/${quizz?._id}`}>Take the Quizz</Link>
              :
              quizz && <div className=' w-full '> <QuizzResultPage quizzId={quizz._id} /> </div>
              }


            </div>



          </div>

          <div className='left w-[27%] max-md:w-full min-w-[100px] max-md:mt-10 mt-3s ' >


            {/* <SessionSidebar sessions={sessions} /> */}
            <ScoreBoard />

          </div>








        </div>
      }


    </>
  )


}
