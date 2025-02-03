'use client';
import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm, Controller, useFieldArray } from 'react-hook-form'
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import './react-quill.css'
import Select from 'react-select';
import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { question } from '@/components/types';
import Image from 'next/image';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const schema = z.object({

  questionText: z.string().min(1, ' question text is required ').optional(),
  questionImg: z.any().optional(),

  answers: z.array(z.object({
    answerText: z.string().optional(),
    answerImage: z.any().optional(),
  })).min(2, 'at least 2 answer is required'),
  //question role -> [ 'practice ' , 'quizz' , 'both'  ]
  role: z.string().min(2, 'role is required'),
  correctAnswer: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "must enter a number"
  })
});


type Inputs = z.infer<typeof schema>;


//select role options
const sectionOptions = [{ label: "practice", value: "practice" }, { label: "quizz", value: "quizz" }, { label: "both", value: "both" }]


export default function EditQuestionForm(params: { question: question, renderHtml: (htmlContent: string) => React.JSX.Element , setOpenEdit:(state:boolean)=>void }) {


  const router = useRouter();
  const question = params.question;


  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ]  // Hide toolbar when not focused
  };

  const { control, setValue, register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema) , defaultValues: {
      questionText: question.questionText,
      questionImg: question.questionImg,
      answers: question.answers,
      role: question.role,
      correctAnswer: question.correctAns.toString()
    }
  });
  const { fields, append , remove } = useFieldArray({
    control,
    name: "answers",
  });




  const formSubmit: SubmitHandler<Inputs> = async (data) => {

    const formData = new FormData();
    console.log(data);
    data.questionText && formData.append('questionText', data.questionText);
    formData.append('images', data.questionImg[0]);
    formData.append('numberOfAnswers', fields.length.toString());
    data.answers.map((ans) => {
      ans.answerText && formData.append(`answersText`, ans.answerText);
      ans.answerImage && formData.append(`images`, ans.answerImage[0])
    });
    formData.append('role', data.role)
    formData.append('correctAns', data.correctAnswer);

    console.log(formData.getAll('answersText'));
    try {
      const response = await api.patch(
        `http://localhost:5000/api/questions/${question._id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        },
      );
      console.log(response.data);
      params.setOpenEdit(false);
      router.refresh()

    }
    catch (e) {
      console.log(e);
      console.log("cant update the question");
      return e;
    }
  }

  const handleSelectChange = (selectedOption: { value: string, label: string } | null) => {
    setValue('role', selectedOption ? selectedOption.value : 'practice');
  };


  return (

    <>
      <div className='w-[60%] max-lg:w-[70%] max-sm:w-[90%] h-[80%] bg-white p-4 rounded-lg overflow-y-scroll pb-12 '>
        <form onSubmit={handleSubmit(formSubmit)} >

          {/* question text with react-quill  */}
          <p className='border-b-2 pb-2 mb-4 border-prime text-center text-[22px]'>Question Head</p>
          <div className='mb-3 relative'>
            <label htmlFor="questionText">Question text</label>
            <Controller name="questionText"
              control={control}

              render={({ field }

              ) => (
                <ReactQuill
                  {...field}
                  onChange={(value) => field.onChange(value)} // Update the field value
                  theme="snow"
                  placeholder="write your question here"
                  modules={modules}


                />)} />
            {errors.questionText && <p className='text-red-500 font-kanit' > {errors.questionText.message}  </p>}

          </div>

          {/* question Img */}
          <div className='flex flex-col mb-3 '>

            <label htmlFor="questionImg" className='mt-4  px-2 p-0.5 w-fit  bg-gradient-to-r from-prime to-black/80 text-white   rounded-2xl cursor-pointer duration-400 hover:bg-gradient-to-r  text-[16px]' > Upload Image </label>
            <input id='questionImg' type="file" className=' file:hidden px-4 text-gray-400 ' {...register('questionImg')} />
            { question.questionImg && <Image  className='mb-2' src ={question.questionImg} width={200} height={200} alt='img' /> }
          
          </div>


          {/* question answers */}

          <div>
            {
          

            
              fields.map((field, index) => {
                return <div key={index} className='flex flex-col mb-3 border-[1px] border-gray-400 p-3 rounded-xl'>
                  <Controller name={`answers.${index}.answerText`}
                    control={control}
                    render={({ field }) => (

                      <ReactQuill

                        {...field}
                        onChange={(value) => field.onChange(value)} // Update the field value
                        theme="snow"
                        placeholder={`option ${index + 1} `}
                        modules={modules}
                        className='!text-[20px]'
                      />)}

                  />

              
                 
                  <label htmlFor={`answers.${index}.answerImage`} className='mt-4  px-2 p-0.5 w-fit  bg-gradient-to-r from-prime to-black/80 text-white   rounded-2xl cursor-pointer duration-400 hover:bg-gradient-to-r  text-[16px]' > Upload Image </label>
                  <input id={`answers.${index}.answerImage`} type="file" className=' px-4 text-gray-400 file:hidden ' {...register(`answers.${index}.answerImage`)} />
                  {errors.answers && errors.answers[index]?.answerText && <p className='text-red-500 font-kanit' > {errors.answers[index]?.answerText.message}  </p>}
                 { question.answers[index].answerImg && <Image  className='mb-2' src ={question.answers[index].answerImg} width={200} height={200} alt='img' />}
                        <button onClick={()=>remove(index)} className='  text-center' > <span className='bg-red-800  w-fit text-white p-1 px-4 rounded-2xl'> remove</span> </button>
                </div>

              })

            }

          </div>


          <button type='button' onClick={() => { append({ answerText: "", answerImage: undefined }) }} className=' w-full text-center text-therd bg-prime p-1' > Add Answer</button>
          {errors.answers && <p className='text-red-500 font-kanit' > {errors.answers.message}  </p>}



          {/* question role */}
          <label htmlFor="role"> role</label>
          <Select
            options={sectionOptions}
            onChange={handleSelectChange}
            getOptionLabel={(e) => e.label}
            getOptionValue={(e) => e.value}
            className='mb-4 w-[120px] border-2 border-prime outline-none '
            classNamePrefix={'question-role-select'}


          />

          {/* correct ans number */}

          <div className='flex flex-col mb-3'>
            <label htmlFor="correctAnswer">correct answer</label>
            <input type="number" {...register('correctAnswer')} className='w-[60px] p-1 border-2 border-prime appearance-none text-prime font-bold flex justify-center text-center  text-[22px] num-input ' placeholder='-' />
            {errors.correctAnswer && <p className='text-red-500 font-kanit' > {errors.correctAnswer.message}  </p>}
          </div>

          <div className='flex justify-center w-full'>
            <input type="submit" value={'Save'} className='p-2 px-8 text-white duration-300 rounded-lg shadow-2xl cursor-pointer hover:px-4 bg-prime text-cneter ' />
          </div>


        </form>

      </div>
    </>

  )
}
