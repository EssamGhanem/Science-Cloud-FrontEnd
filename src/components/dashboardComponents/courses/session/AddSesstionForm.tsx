"use client";

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { section } from '@/components/types';
import Select from 'react-select';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const schema = z.object({
  title: z.string().min(1, "title is required"),
  videoLink: z.string().min(10, "video link is required"),
  section: z.any()

});

type Inputs = z.infer<typeof schema>;




export default function AddSesstionForm(params: { sections: section[], setOpenAddSessionForm: (state: boolean) => void }) {

  const sections = params.sections;
  const router = useRouter();
  const sectionOptions = sections.map((section) => ({
    value: section._id,
    label: section.title,

  }));

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Inputs>({
    resolver: zodResolver(schema)
  });

  const handleSelectChange = (selectedOption : {value:string , label:string} | null) => {

    setValue('section', selectedOption ? selectedOption.value : '');
  };

  const formSubmit: SubmitHandler<Inputs> = async (data) => {

    try{

   
    await axios.post('http://localhost:5000/api/sessions',{
      title:data.title,
      videoLink:data.videoLink,
      sectionId:data.section
    });
    params.setOpenAddSessionForm(false);
    router.refresh();

  }catch(e)
  {
    console.log("cant create a new session ");
    console.log(e);
  }



  }

  return (
    <div className=' w-[70%] bg-prime/50 p-5 border-4 rounded-lg max-h-[80vh] overflow-auto'>
      <p className='text-[20px] text-white font-kanit  text-center'>Adding a new session </p>

      <form onSubmit={handleSubmit(formSubmit)} >



        <div className='formCourseDiv'  >
          <label className='formCourseLabel  !text-white ' >title</label>
          <input {...register("title")} className='formCourseInput  ' placeholder='session title' type="text" />
          {errors.title && <div className=' text-red-500 '> {errors.title.message} </div>}
        </div>



        <div className='formCourseDiv ' >
          <label className='formCourseLabel !text-white ' >Session Link</label>
          <input   {...register("videoLink")} className='formCourseInput ' placeholder='video Link' type="text" />
          {errors.videoLink && <div className=' text-red-500 text-bold '> {errors.videoLink.message} </div>}

        </div>

        <div>
          <label htmlFor="section" className='formCourseLabel  !text-white '>Choose Course Section:</label>
          <Select
            options={sectionOptions}
            onChange={handleSelectChange}
            getOptionLabel={(e) => e.label}
            getOptionValue={(e) => e.value}
            placeholder="Select a section"
            className="w-full text-[22px]"
            classNamePrefix="custom-select"
          />

        </div>


        <div className='formCourseDiv flex flex-row justify-around  w-full '>
          <button type='submit'  className='bg-prime text-white font-mono max-md:text-[12px] max-md:w-[40%]
             rounded-md p-2 text-center  text-[18px] w-[30%]  border-2 border-white'> Add </button>

        </div>



      </form>


    </div>
  )
}
