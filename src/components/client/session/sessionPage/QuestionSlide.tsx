'use client'
import React from 'react'
import { question } from '@/components/types';
import { useState } from 'react';
import Answer from './Answer';
import Result from './Result';
import { RootState } from '@/app/store/store';
import { addAns } from '@/state/question/selectedAns';
import { useDispatch , useSelector } from 'react-redux';
import { setCurrentQuestion } from '@/state/question/currentQuestion';

import { setResultTrue } from '@/state/question/result';


// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '@/app/store/store';


export default function QuestionSlide( params:{questions:question[]} ) {

  const currentQuestion = useSelector((state:RootState)=>state.currentQuestion.value);
  
  const dispatch = useDispatch();


  const questions = params.questions;
  // states:
  
  // const [selectedAns, setSelectedAns] = useState(-1);
  const showAns = useSelector((state:RootState)=>state.setShowAns.value);
  const [score , setScore] = useState(0);

  const result = useSelector((state:RootState)=>state.result.value);
  const [selectedAnswerIdx,setSelectedAnswerIdx] = useState(-1);
  
  const checkAns= (idx:number)=>{
    
    setSelectedAnswerIdx(idx);
    
  }

  const nextQuestion = ()=>{

    dispatch(addAns(selectedAnswerIdx))
    if(selectedAnswerIdx == questions[currentQuestion].correctAnswer && showAns===false){
      setScore(score+1);
    }

    if(currentQuestion < questions.length -1 )
    {
     dispatch( setCurrentQuestion(currentQuestion+1))
    }
    else{
      dispatch(setResultTrue());
      
    }
    setSelectedAnswerIdx(-1);
    
  }
  
  
  
  return (

    <>
    
   
    {  result ? <Result score={ score } numberOfQuestions={questions.length} questions={questions} /> :     <div> 
      <h3 className='font-bold border-b-2 pl-3 '>{currentQuestion + 1} of {questions.length}</h3>


      <p className='text-[16px] md:text-[18px] mb-2'>
        {questions[currentQuestion].questionText}

      </p>

      {questions[currentQuestion].answers.map((ans, idx) => {
        return <div key={idx} onClick={() => { checkAns(idx) }}  >

          <Answer ans={ans} selectedAnswerIdx={selectedAnswerIdx}  idx={idx} correctAnsIdx={questions[currentQuestion].correctAnswer} currentQuestionIdx={currentQuestion} />
        </div>

      })}

      <button className='bg-prime text-white p-1 px-4 rounded-lg my-2' onClick={nextQuestion} >{currentQuestion===questions.length-1?"Show Score":"Next"}</button>
    </div>
}

    </>
  )
}
