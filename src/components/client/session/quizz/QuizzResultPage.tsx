'use client'
import { quizz, user } from '@/components/types';
import api from '@/utils/api'
import React, {  useEffect, useState } from 'react'
import { LuLoader } from "react-icons/lu";



const getQuizz = async (quizzId: string) => {

  try {
    const res = await api.get(`http://localhost:5000/api/quizz/${quizzId}`);
    return res.data.quizz;
  } catch (e) {
    console.log(e);
  }
}






export default function QuizzResultPage(params: { quizzId: string }) {


  const quizzId = params.quizzId;
  const [user , setUser ] = useState< user | null >(null)
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const [quizz, setQuizz] = useState<quizz | null>(null)
  const [loadding, setLoadding] = useState(true)

  const getUser = async () => {
    try {
      const res = await api.post('http://localhost:5000/api/auth/refresh-token', {}, { withCredentials: true });
      return res.data.user;
    }
    catch (e) {
      console.log(e);
    }

  }


  useEffect(() => {


    getUser().then((user) => {

      setUser(user);
      getQuizz(quizzId).then((quizz: quizz) => {
        if (user && quizz) {
          const correct = quizz.questions.filter((quizzQuestion) => {
            return user.correctQestions.includes(quizzQuestion._id);
          });
          setNumberOfCorrectAnswers(correct.length);
          setQuizz(quizz);
        }


      });

    })

    setLoadding(false)

  }, [])


  return (

    <>



      <div className=' flex flex-col  justify-center items-center w-full h-full bg-prime text-white text-[24px] min-h-[300px]'>
        {loadding ? <LuLoader className=' animate-spin text-[44px]  ' /> :
          <div className=' flex flex-col  justify-center items-center w-full h-full p-8 '>
            
            <p>{quizz?.title}</p>
            <div className=' flex flex-col  justify-center items-center p-2 mt-4 border-2 border-white px-10'>
              <p>Result</p>
              <p>{numberOfCorrectAnswers} / {quizz?.numberOfQuestions}</p>
            </div>
          </div>
        }
      </div >
      



    </>
  )
}
