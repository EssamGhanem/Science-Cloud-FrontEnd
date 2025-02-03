import { question } from '@/components/types'
import React, { useState } from 'react'
import QuestionCard from './QuestionCard';

export default function QuestionsList(params: { questions: question[] }) {
  const questions = params.questions;
  const [filter, setFilter] = useState('hide')

  return (
    <div className='flex flex-col w-full p-3 mt-4 border-2 border-prime'>
      <div className=' max-sm:w-full w-[70%] flex  flex-wrap  justify-center items-center  border-[1px] border-gray-900 m-auto '>
     
        <button className={` w-[100px] max-sm:px-0.5 px-2 text-gray-500 ${filter == "all" ? ' bg-gray-500/30 ' : ''}`} onClick={() => setFilter('all')} > All</button>
        <button className={` w-[100px] max-sm:px-0.5 px-2 text-gray-700 ${filter == "practice" ? ' bg-gray-500/30 ' : ''}`} onClick={() => setFilter('practice')}> Practice</button>
        <button className={` w-[100px] max-sm:px-0.5  px-2 text-red-700 ${filter == "quizz" ? ' bg-red-700/30 ' : ''}`} onClick={() => setFilter('quizz')}> Quizz</button>
        <button className={`  w-[100px] max-sm:px-0.5  px-2 text-blue-500 ${filter == "both" ? ' bg-blue-500/30 ' : ''}`} onClick={() => setFilter('both')}> Both</button>
        <button className={`   w-[100px] max-sm:px-0.5 px-2 text-gray-500 ${filter == "hide" ? ' bg-gray-500/30 ' : ''}`} onClick={() => setFilter('hide')} > Hdie all</button>
      </div>
      {
        questions.filter((q) => {
          if (filter == 'all') {
            return q;
          }
          else {
            return q.role == filter ? q : false;
          }
        }

        ).map((q, idx) => {
          return <QuestionCard question={q} idx={idx} key={idx}  />
        })
      }
    </div>
  )
}
