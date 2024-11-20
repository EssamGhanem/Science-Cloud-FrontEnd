'use client';
import Image from 'next/image';
import React from 'react'
import {  useSelector } from 'react-redux'
import { RootState } from '@/app/store/store';




export default function Answer(params:{ans:{text?:string,img?:string},idx:number,selectedAnswerIdx:number,correctAnsIdx:number,currentQuestionIdx:number}) {
  const currentQuestion = params.currentQuestionIdx;
  const answer = params.ans;
  const showAns = useSelector((state:RootState)=>state.setShowAns.value);
  const selectedAns = useSelector((state:RootState)=>state.selectedAns.value)
  

  const isSelected:boolean = showAns? params.idx===selectedAns[currentQuestion] :params.idx===params.selectedAnswerIdx;
  const selectdBG = isSelected?(showAns?" bg-red-500 ":" bg-prime/50 text-white "):"";
  const correctAnsBG = params.idx === params.correctAnsIdx && showAns ? " bg-green-500 " :false;



  const bg = correctAnsBG?correctAnsBG:selectdBG;
  
  
  


  return (
   
   
   <div className={'w-full p-1 mb-4 rounded-lg px-4 border-2 border-black/30 duration-200 cursor-pointer '+bg }>
      {answer.img!=undefined? <Image src={answer.img} width='200' height='200' alt='img' />  :<></>}
      {answer.text!=undefined? <p> {answer.text}</p>:<></>}


    </div>

  )
}
