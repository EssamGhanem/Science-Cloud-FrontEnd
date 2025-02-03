import { question, session } from '@/components/types';
import api from '@/utils/api';
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod'

const schema = z.object({
  duration: z.string().refine((val) => !Number.isNaN(parseInt(val, 10))),
  numberOfQuestions: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)))
})


type Inputs = z.infer<typeof schema>;



export default function AddQuizzForm(params: { numberOfQuizzQuestions: number, questions:question[], session: session ,setAddQuizz:(state:boolean)=>void }) {

  const numberOfQuizzQuestions = params.numberOfQuizzQuestions;
  const session = params.session;
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ resolver: zodResolver(schema) })



  const formSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    try {
      const res = await api.post('http://localhost:5000/api/quizz', {
        title:`${session.title} Quizz`,
        sessionId: session._id,
        duration: data.duration,
        numberOfQuestions: data.numberOfQuestions,
        questions:params.questions
      
      });


      console.log(res.data);
      
      router.refresh();
      params.setAddQuizz(false);



    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div className=' max-sm:w-[80%] w-[40%] bg-white  p-4 flex flex-col rounded-lg '>
      <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit(formSubmit)}>
        <p className='text-[22px] text-center font-kanit text-prime'>Add Quizz</p>
        <div className='flex flex-col  my-4'>
          <label htmlFor="duration" className='text-[20px]'>Quizz duration <span className='text-black/70 text-[16px]'>in minutes</span> </label>
          <div className='flex w-full'>
            <input min={0} {...register('duration')} type="number" className=' focus:outline-none text-prime pl-1 text-[20px] w-[100px] border-2 border-prime text-center' />
            <p className=' text-black/50 ml-2 text-[22px]'>min</p>
          </div>

          {errors.duration && <p className='text-red-600'>{errors.duration.message}!</p>}
        </div>


        <div className='flex flex-col  my-4'>
          <label htmlFor="numberOfQuestions" className='text-[20px]'>Number of questions </label>
          <input min={0} max={numberOfQuizzQuestions} {...register('numberOfQuestions')} type="number" className=' focus:outline-none text-prime pl-1 text-[20px] w-[100px] border-2 border-prime text-center' />

          {errors.numberOfQuestions && <p className='text-red-600'>{errors.numberOfQuestions.message}</p>}
          <p>Max <span className='font-bold '>{numberOfQuizzQuestions}</span> </p>
        </div>


        <div className='flex justify-center items-center w-full'>
          <input type='submit' value={'Add Quizz'} className=' bg-prime p-1 px-3 hover:px-5 duration-300 text-white rounded-lg ' />
        </div>
      </form>

    </div>
  )
}
