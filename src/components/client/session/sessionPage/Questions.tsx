'use clinet'
import { question } from '@/components/types'

import QuestionSlide from './QuestionSlide';
// import { useState } from 'react';
import StartButton from './StartButton';
import { Provider } from 'react-redux';
import { store } from '@/app/store/store';
import { setQuestionStart } from '@/state/question/QuesionStart';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store/store';
// import QuestionsNavigation from './QuestionsNavigation';


export default function Questions(params: { questions: question[] }) {

  const qStart = useSelector((state:RootState)=>state.questionStart.value);
  const dispatch = useDispatch();


  const questions = params.questions;


  return (
    <div dir='ltr' className='w-full my-10 '>
      <h3>Quesions</h3>
      <Provider store={store} >

      
      <div className=' w-full  border-2 rounded-lg p-4 '>


        {
         qStart? <><QuestionSlide questions={questions} /></>: <div onClick={ ()=>{dispatch(setQuestionStart())}} className=' cursor-pointer ' > <StartButton/> </div> 
        }
      </div>
        
      </Provider>


    </div>
  )
}
