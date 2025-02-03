'use client'
import DOMPurify from 'dompurify'
import { question } from '@/components/types'
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import api from '@/utils/api';




function shuffle( array :question[] ) {
  let tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}











export default function QuestionCard(params: { questions: question[], numberOfQuestions: number, userId: string | undefined, setFinished: (state: boolean) => void ,setTimeLeft:(state:number)=>void   }) {


  const numberOfQuestions = params.numberOfQuestions;
  const[ questions , setQuestion ] = useState<question[]>(params.questions);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const renderHtml = (htmlContent: string) => {
    if (isClient) {
      const sanitizedHTML = DOMPurify.sanitize(htmlContent);
      return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
    }
    return "";
  }


  const [imageToOpen, setImageToOpen] = useState<string | undefined>('');
  const [showImage, setShowImage] = useState(false);

  const openImage = (imageUrl: string | undefined) => {
    setImageToOpen(imageUrl);
    setShowImage(true);
  }


  const [selectedAnswer, setSelectedAnswer] = useState(-1);






  const submitAns = async () => {



    const answerState: boolean = selectedAnswer + 1 === questions[currentQuestionIdx].correctAns;
    try {
      await api.post('http://localhost:5000/api/quizz/userSubmitAnswer', {
        answerState: answerState,
        userId: params.userId,
        questionId: questions[currentQuestionIdx]._id,
      }, {
        withCredentials: true
      })
    
    }
    catch (err) {
      console.log(err);
    }

    if (currentQuestionIdx == questions.length - 1) {
      params.setFinished(true);
      params.setTimeLeft(0);
      return;
    }


    setSelectedAnswer(-1);
    return setCurrentQuestionIdx(currentQuestionIdx + 1)

  }






  useEffect(() => {
    setQuestion(shuffle(params.questions));
    console.log(questions);
    setIsClient(true)


  }, [])






  return (
    <>

      <div className=' flex flex-col w-full p-2 '>


        {/* question text */}

        <div className='p-2 text-[20px]'>
          <p className=' text-[20px] font-bold border-b-[1px] border-gray-300 mb-4 '> {currentQuestionIdx + 1} of {numberOfQuestions}</p>
          {questions[currentQuestionIdx].questionText && <p>{renderHtml(questions[currentQuestionIdx].questionText)}</p>}
          {questions[currentQuestionIdx].questionImg && <Image onClick={() => openImage(questions[currentQuestionIdx].questionImg)} src={questions[currentQuestionIdx].questionImg} alt='img' width={100} height={100} className='my-2 w-[100px]' />}
        </div>
        {/* answers */}
        <div className='p-4'>
          {
            questions[currentQuestionIdx].answers.map((ans, idx) => {
              return <div key={idx} onClick={() => setSelectedAnswer(idx)} className={` pl-3 border-[2px] rounded-md my-4 border-gray-400 p-2 hover:bg-prime/20 cursor-pointer duration-300 ${selectedAnswer === idx && 'bg-prime/80 hover:bg-prime/90 text-white'} `} >
                {ans.answerText && <p className=''>{renderHtml(ans.answerText)}</p>}
                {ans.answerImg && <Image onClick={() => openImage(ans.answerImg)} src={ans.answerImg} alt='img' width={100} height={100} className='my-2 w-[100px]' />}
              </div>
            })
          }

        </div>




      </div>
      <div>
        {
          <button onClick={() => submitAns()} className='w-full bg-prime text-white text-[24px] '> submit answer </button>

        }
      </div>



      {/* show image */}
      {showImage && imageToOpen && <div onClick={() => setShowImage(false)} className=' flex flex-col w-[100vw] h-[100vh] justify-center p-10 items-center absolute z-10    bg-black/30 left-[50%] top-[50%] translate-x-[-50%]  translate-y-[-50%] '>


        <Image src={imageToOpen} width={900} height={900} alt='image' className=' max-sm:w-[100%] max-w-[80vh] ' />
        <p className=' mt-10 '> <IoClose className='text-[28px] shadow-white  shadow-2xl z-10 text-white p-0.5 bg-prime rounded-full cursor-pointer hover:scale-110 duration-300' onClick={() => setShowImage(false)} /></p>

      </div>}

    </>

  )
}
