'use client'
import { quizz, user } from '@/components/types'
import React, { useEffect, useState } from 'react'
import useTimer from './useTimer'
import QuestionCard from './QuestionCard'
import api from '@/utils/api';
import QuizzResultPage from './QuizzResultPage'
import { useRouter } from 'next/navigation';





export default function QuizzPage( params:{ quizz:quizz} ) {



  const [user , setuser]= useState<user|null>(null);
  const quizz = params.quizz;


  const { timeLeft, isTimeUp, setTimeLeft } = useTimer(quizz.duration);
  // const [loadding , setLoadding] = useState(false);
  const [showResult, setShowResult] = useState(false)
  const [finished, setFinished] = useState(false);
  
  const router = useRouter();


  const getUser = async () => {
  
    try {
      const res = await api.post('http://localhost:5000/api/auth/refresh-token', {},{ withCredentials: true });
      return res.data.user;
    }
    catch (e) {
      console.log(e);
      return null;
    }
  
  }

  
const addTheQuizzToUser = async (userId : string , quizzId:string)=>{

  try{
    const res =await api.post('http://localhost:5000/api/quizz/AddQuizzToUser',{
      userId,
      quizzId
    })
  return res;
  }catch(e){
    console.log(e)
    return;
  }


}
  


  useEffect(() => {

    getUser().then((user:user)=>{
      setuser(user);
      if(user && user.quizzes.includes(quizz._id)){
        router.push('/');
      }
      else{
       
          addTheQuizzToUser(user._id,quizz._id);
        
     
      }
    })
  


  }, [])






  return (

    <>

      <div className=' flex flex-col w-full min-h-[100vh] max-sm:p-2  p-6 bg-black/20 justify-center items-center h-full'>
        {/* quizz header  */}


        <div className='w-full flex  flex-col justify-between items-center mb-4 '>
          <p className='text-[24px]'>{quizz.title}</p>
          <p className='text-[18px]'>Time <span className='font-bold' >{quizz.duration}</span> min</p>
          {user && <p className='text-[18px]'> {user.fullName} </p>}
          {<p className='text-[22px] border-[1px] border-white px-4 font-bold'>{Math.floor(timeLeft / 60) < 10 ? '0' + Math.floor(timeLeft / 60) : Math.floor(timeLeft / 60)} : {Math.floor(timeLeft % 60) < 10 ? '0' + Math.floor(timeLeft % 60) : Math.floor(timeLeft % 60)}  </p>}
        </div>


        <div className='  w-[70%] max-sm:w-[95%]  bg-white p-5 rounded-[5px] h-[70vh] overflow-y-auto scrollbar-custom '>



          {/* quizz body */}

          {quizz && !isTimeUp && !finished &&
            <div className=' border-[1px] border-gray-300 mb-8 '>

              <QuestionCard setFinished={setFinished} setTimeLeft={setTimeLeft} questions={quizz.questions} numberOfQuestions={quizz.numberOfQuestions} userId={user?._id} />
            </div>
          }

          {
            (isTimeUp || finished) && !showResult && <div className='w-full h-full bg-prime rounded-[20px] flex flex-col justify-center items-center'>
              <p className='text-[32px] text-white '>{finished ? 'will done ' : 'Time is up'} </p>
              <button onClick={() => setShowResult(true)} className=' px-4 p-1 m-2 hover:bg-white hover:text-prime duration-300 text-white text-[22px] border-2 border-white rounded-2xl'>Show Result</button>
            </div>
          }


          {
            showResult && user && <QuizzResultPage quizzId={quizz._id} />
          }

        </div>


      </div>
    </>
  )




}



