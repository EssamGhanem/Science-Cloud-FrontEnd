import React from 'react'

import { setQuestionEnd } from '@/state/question/QuesionStart';
import { useDispatch } from 'react-redux'
// import { RootState } from '@/app/store/store';
import { resetAns } from '@/state/question/selectedAns';
import QuestionsNavigation from './QuestionsNavigation';
import { question } from '@/components/types';
import { setCurrentQuestion } from '@/state/question/currentQuestion';
import { setShowAnsFalse } from '@/state/question/showAns';
import { setResultFalse } from '@/state/question/result';
export default function Result(params:{score:number , numberOfQuestions:number,questions:question[]}) {
  
  const questions = params.questions;
  const dispatch = useDispatch();
   
   const endQuestion = ()=>{

    dispatch(setQuestionEnd())
    dispatch(resetAns())
    dispatch(setCurrentQuestion(0))
    dispatch(setShowAnsFalse())
    dispatch(setResultFalse(  ))
   }

  const score = params.score;
  const numberOfQuestions = params.numberOfQuestions;
  
  
  
  return (
    <div className='w-full h-[300px] flex justify-center items-center  flex-col  '  >
      <p className=' text-[18px]  '>Score</p>
      <p className=' text-[22px] mb-5  '> {score}/{numberOfQuestions} </p>
      <button className='border-2 border-prime px-4 rounded-lg ' onClick={()=>endQuestion()}>Return</button>
      <QuestionsNavigation questions={questions} />
    </div>
  )
}
