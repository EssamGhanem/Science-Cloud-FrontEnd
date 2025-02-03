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

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const schema = z.object({

  questionText: z.string().min(1, ' question text is required ').optional(),
  questionImg: z.any().optional(),

  answers: z.array(z.object({
    text: z.string().optional(),
    image: z.any().optional(),
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

export default function AddQuestionForm(params: { sessionId: string, setAddQuestion: (state: boolean) => void }) {

  const sessionId = params.sessionId;
  const router = useRouter();



  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ]  // Hide toolbar when not focused
  };

  const { control, setValue, register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema)
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
      ans.text && formData.append(`answersText`, ans.text);
      ans.image && formData.append(`images`, ans.image[0])
    });
    formData.append('role', data.role)
    formData.append('correctAns', data.correctAnswer);
    formData.append("sessionId", sessionId)
    console.log(formData.getAll('answersText'));
    try {
      const response = await api.post(
        'http://localhost:5000/api/questions',
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        },
      );
      router.refresh()
      console.log(response.data);
      params.setAddQuestion(false);
    }
    catch (e) {
      console.log(e);
      console.log("cant add the question");
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

          </div>


          {/* question answers */}

          <div>
            {
          

            
              fields.map((field, index) => {
                return <div key={index} className='flex flex-col mb-3 border-[1px] border-gray-400 p-3 rounded-xl'>
                  <Controller name={`answers.${index}.text`}
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
                 
                  <label htmlFor={`answers.${index}.image`} className='mt-4  px-2 p-0.5 w-fit  bg-gradient-to-r from-prime to-black/80 text-white   rounded-2xl cursor-pointer duration-400 hover:bg-gradient-to-r  text-[16px]' > Upload Image </label>
                  <input id={`answers.${index}.image`} type="file" className=' px-4 text-gray-400 file:hidden ' {...register(`answers.${index}.image`)} />
                  {errors.answers && errors.answers[index]?.text && <p className='text-red-500 font-kanit' > {errors.answers[index]?.text.message}  </p>}
                        <button onClick={()=>remove(index)} className='  text-center' > <span className='bg-red-800  w-fit text-white p-1 px-4 rounded-2xl'> remove</span> </button>
                </div>

              })

            }

          </div>


          <button type='button' onClick={() => { append({ text: "", image: undefined }) }} className=' w-full text-center text-therd bg-prime p-1' > Add Answer</button>
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
            <input type="submit" value={'Add question'} className='p-2 text-white duration-300 rounded-lg shadow-2xl cursor-pointer hover:px-4 bg-prime text-cneter ' />
          </div>


        </form>

      </div>
    </>

  )
}
