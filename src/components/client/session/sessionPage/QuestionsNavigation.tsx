// import { question } from '@/components/types'
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '@/app/store/store';
// import { setCurrentQuestion } from '@/state/question/currentQuestion';
// import { setShowAnsTrue, setShowAnsFalse } from '@/state/question/showAns';
// import { FaCheck } from "react-icons/fa6";
// import { setResultFalse } from '@/state/question/result';

// export default function QuestionsNavigation(params: { questions: question[] }) {

//   const questions = params.questions;

//   const dispatch = useDispatch();
//   const selectedAns = useSelector((state: RootState) => state.selectedAns.value);



//   const green = (idx: number) => {
//     return <div className='  w-[25px] h-[25px] flex justify-center items-center text-black  ' >
//      <span className=' text-[18px] font-bold '>{idx + 1}</span> 
//       <FaCheck className='text-[25px] z-10 text-green-700  absolute '  />
//     </div>

//   }


//   const red = (idx: number) => {
//     return <div className='  w-[25px] h-[25px]  px-4 flex justify-center items-center bg-red-600 ' >
//       {idx + 1}
      
//     </div>

//   }

//   const white = (idx: number) => {
//     return <div className='  w-[25px] h-[25px]  px-4 flex justify-center items-center text-prime ' >
//       {idx + 1}
//     </div>

//   }


//   function GoTo(idx: number) {
    
//     dispatch(setResultFalse())
//     dispatch(setShowAnsTrue())
    
//     if (idx >= selectedAns.length) {
//       dispatch(setShowAnsFalse());
//     }
//     else{
//       dispatch(setShowAnsTrue());
//     }

//     dispatch(setCurrentQuestion(idx));
//   }



//   return (


//     <div className='w-full flex gap-4 p-2' >
//       {
//         questions.map((q, idx) => {

//           return <div key={idx} className='   border-2
//              border-prime p-[2px]  flex justify-center items-center
//               text-white hover:scale-110 cursor-pointer duration-500 '
//             onClick={() => GoTo(idx)} >

//             {

//               idx < selectedAns.length ? (q.correctAnswer === selectedAns[idx] ? green(idx) : red(idx)) : white(idx)

//             }
//           </div>
//         })

//       }
//     </div>
//   )
// }
