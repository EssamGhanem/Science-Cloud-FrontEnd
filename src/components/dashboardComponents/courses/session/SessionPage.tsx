'use client';
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useState, useEffect } from 'react';
import { question, session } from '@/components/types';
import { FaRegWindowClose } from 'react-icons/fa';
import AddQuestionForm from './questions/AddQuestionForm';
import AddQuizzForm from './quizz/AddQuizzForm';
import QuestionsList from './questions/QuestionsList';
import EditSessionForm from './EditSessionForm';




//dashboard session page
export default function SessionPage(params: { session: session, questions: question[] }) {

  const session = params.session
  const questions = params.questions
  const quizz = session.quizz;
  const [isClient, setIsClient] = useState(false);
  const [addQuestion, setAddQuestion] = useState(false);
  const [addQuizz, setAddQuizz] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const numberOfQuizzQuestions = questions.filter((q) => q.role === 'both' || q.role === 'quizz')
  useEffect(() => {

    setIsClient(true)


  }, [])






  return (
    <>

      {
        openEdit ?
          <div className=' AbsoluteForm' >
            <button className=' fixed text-white top-[4%] right-[5%]
                                        text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
              onClick={() => setOpenEdit(false)} ><FaRegWindowClose />
            </button>
            <EditSessionForm session={session} setOpenEdit={setOpenEdit} /> : <></>
          </div>
          :
          <></>

      }

      {
        addQuestion ?
          <div className=' AbsoluteForm' >
            <button className=' fixed text-white top-[4%] right-[5%]
                              text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
              onClick={() => setAddQuestion(false)} ><FaRegWindowClose />
            </button>
            <AddQuestionForm sessionId={session._id} setAddQuestion={setAddQuestion} /> : <></>
          </div>
          :
          <></>

      }


      {
        addQuizz ?
          <div className=' AbsoluteForm' >
            <button className=' fixed text-white top-[4%] right-[5%]
                              text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
              onClick={() => setAddQuizz(false)} ><FaRegWindowClose />
            </button>
            <AddQuizzForm session={session} numberOfQuizzQuestions={numberOfQuizzQuestions.length}  questions={numberOfQuizzQuestions} setAddQuizz={setAddQuizz} /> : <></>
          </div>
          :
          <></>

      }






      <div className='flex flex-col p-8 mb-20 max-sm:p-2 max-sm:justify-center '>
        {/* edit and delete buttom */}


        {/*  title */}
        <h1 className=' md:text-[22px] font-cairo font-bold mb-2 '> {session.title} </h1>
        {/*  video */}
        <div className='flex items-center justify-between w-full p-8 border-2 border-black max-md:flex-col'>
          <div className='  p-2 border-[3px] border-black/50 mb-4  w-[300px] h-[200px]  '>
            {
              isClient ? <ReactPlayer url={session.videoLink} width='100%' height='100%' controls /> : ""
            }
          </div>
          <div className=' w-[30%] max-md:w-full flex  gap-6 flex-col items-center justify-center h-full max-md:flex-row '>
            <button className='deleteButton' >delete</button>
            <button className=' editButton' onClick={() => setOpenEdit(true)} >edit</button>
          </div>
        </div>

        {/* add buttons */}
        <div className='flex flex-col w-full'>

          <button className='w-full p-2 my-4 bg-prime/30 text-prime' onClick={() => setAddQuestion(!addQuestion)} > Add Question </button>
          <button className='w-full p-2 bg-prime/30 text-prime ' onClick={() => setAddQuizz(!addQuizz)}> Add Quizz </button>





        </div>


        {/* quizz */}
        {quizz && <div>
          <h3 className='w-full text-center mt-10 text-[24px] text-prime' > Quizz</h3>
          <div className='border-2 border-prime p-2 '>

            <p>Duration : <span>{quizz.duration } min</span></p>
            <p>Questions : <span>{quizz.numberOfQuestions}</span></p>


          </div>
        </div>
        }



        {/*  questions */}
        <h3 className='w-full text-center mt-10 text-[24px] text-prime'> Questions</h3>
        <QuestionsList questions={questions} />




      </div>







    </>
  )
}
