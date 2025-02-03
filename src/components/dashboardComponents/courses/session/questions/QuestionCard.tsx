import { question } from '@/components/types'
import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify'
import Image from 'next/image';
import { FaRegWindowClose } from 'react-icons/fa';
import EditQuestionForm from './EditQuestionForm';


const renderHtml = (htmlContent: string) => {

  const sanitizedHTML = DOMPurify.sanitize(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;

}

export default function QuestionCard(params: { question: question, idx: number }) {
  const question = params.question;
  const idx = params.idx;
  let isCorrectAns = false;
  const [isClient, setIsClient] = useState(false);
  const [openEdit , setOpenEdit] = useState(false);


  const Submited = question.numberOfCorrectAnswers + question.numberOfWrongAnswers;
  useEffect(() => {
    setIsClient(true)
  }, [])




  return (
    <div className='my-2 p-2 border-[1px] border-prime/50'>
      <p>Q-{idx + 1}</p>
      <div className='mb-2 '>
        {isClient && <div className='mb-4'>{renderHtml(question.questionText)}</div>}
        {question.questionImg && <Image src={question.questionImg} width={200} height={200} alt='question img' />}
      </div>
      {/* Answers */}
      <div className=' my-2 bg-prime/30 border-x-[1px] border-prime border-t-[1px]'>
        {question.answers.map((ans, idx) => {

          if(ans.answerText ==''||ans.answerText === null && ans.answerImg === null ){
            return ;
          }
          isCorrectAns = idx + 1 === question.correctAns

          return <div key={idx} className={`p-2 border-b-[1px]  border-prime ${isCorrectAns ? 'bg-green-400' : ''}`} >
            {isClient && ans.answerText && <div className='mb-2'>{renderHtml(ans.answerText)}</div>}
            {ans.answerImg && <Image src={ans.answerImg} width={200} height={200} alt='img' />}
          </div>
        })}

      </div>
      {/* question statistics */}

      <div className='flex justify-between w-full max-sm:flex-col'>
        <p>percentage: <span>{Submited === 0 ? 0 : Math.round(question.numberOfCorrectAnswers / Submited *100)}%</span></p>
        <p>Correct: {question.numberOfCorrectAnswers}</p>
        <p>Wrong: {question.numberOfWrongAnswers}</p>
        <p>Submited: {Submited}</p>
      </div>


      {/* question role */}
      <div className='w-full '>
        <p>
          <span className={
            ` 
              
                   ${question.role == 'quizz' ? 'font-bold text-red-700 border-red-700' : ''} 
                   ${question.role == 'practice' ? 'font-bold text-gray-700 border-gray-700' : ''}
                   ${question.role == 'both' ? 'font-bold text-blue-500' : ''}
                  `}>
            {question.role}</span></p>
      </div>

      {/* edit and delete buttons */}

      <div className='flex items-start justify-around w-full pt-4 my-4 border-t-2 border-prime'>
        <button className='editButton w-[25%] ' onClick={()=>setOpenEdit(true)}>Edit</button>
        <button className='deleteButton w-[25%]'>Delete</button>
      </div>

      {
        openEdit ?
          <div className=' AbsoluteForm' >
            <button className=' fixed text-white top-[4%] right-[5%]
                                    text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
              onClick={() => setOpenEdit(false)} ><FaRegWindowClose />
            </button>
            <EditQuestionForm question ={question} renderHtml={renderHtml} setOpenEdit={setOpenEdit} /> : <></>
          </div>
          :
          <></>

      }



    </div>
  )
}
