import React from 'react'
import Image from 'next/image';

type question = {
  
 
    questionText:string;
    image?:string;
    answers:{
      text?:string;
      image?:string;
    }[];
    correctAnswer:number;

}

export default function Question(params:{question:question}) {
  
  const question = params.question;
  
  return (
    
      <div className='question w-full border-2 border-black font-cairo mb-[20px]'>
        <div className='question-header p-2 border-b-2'>
        <p className='font-bold'>{question.questionText}</p>
        {
          question.image===undefined?<></>:<Image src={question.image} alt='img'/>
        }
        </div>
        <div dir='rtl' className='Q-answers flex flex-col '>
            {
              question.answers.map((e,idx)=>{
                return  <div key={idx} className='border-b-[2px] p-2 pr-4 hover:bg-prime/40 duration-500  '>
                          <p className=''>{e.text}</p>
                         { e.image===undefined?<></>:<Image src={e.image} alt='img'/>}
                      </div>
                
              })
            }
        </div>
          
      </div>
  )
}
