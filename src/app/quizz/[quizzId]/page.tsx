
import QuizzPage from '@/components/client/session/quizz/QuizzPage';
import api from '@/utils/api';
import React from 'react'




const getQuizz = async (quizzId: string) => {

  try {
    const res = await api.get(`http://localhost:5000/api/quizz/${quizzId}`, { withCredentials: true });
    return res.data.quizz;
  } catch (e) {
    console.log(e);
  }
}


export default async function page( {params}:{params:{quizzId:string}}) {


 

  const quizz = await getQuizz(params.quizzId);





  return (

    <>
     
        
        <QuizzPage quizz={quizz} />
  


    </>
  )
}



