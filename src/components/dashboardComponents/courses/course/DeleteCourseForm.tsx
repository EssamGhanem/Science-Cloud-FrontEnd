'use client';
import React, { ChangeEvent, useState } from 'react'
import { course } from '@/components/types'
import api from '@/utils/api';
import { useRouter } from 'next/navigation';

export default function DeleteCourseForm(params:{course : course , setOpenDelete:(state:boolean)=>void}) {
  const course = params.course
  const router = useRouter();
  const [deleteInput,setDeleteInput] = useState(false);
  const handelDeleteCourse = (event :ChangeEvent<HTMLInputElement>)=>{

    if(event.target.value === 'Delete Course'){
      setDeleteInput(true);
    }
    else{setDeleteInput(false);}
  }


  const deleteCourse = async (course:course)=>{
    
    try{

      const res = await api.delete(`http://localhost:5000/api/courses/${course._id}`)
      console.log(res.data);
      router.push('/dashboard/courses');

    }catch(e){
      console.log(e);
    }

  }
  
  return (
    
    <div className=' max-md:w-[85%] w-[700px] bg-prime/50 h-[350px]flex flex-col text-white border-2 border-white rounded-lg p-4 justify-around items-center'>
        <p className='text-[22px]'>Are you sure you want to delete this course  <br /> <span className='font-bold bg-prime px-2 rounded-xl'>{course.title}</span> </p>
        <p>! every thing related will be deleted with course like sesions, section, quizzes and questions.</p>
        <p>to delete type <span className=' bg-white/20 px-2 rounded-xl'>Delete Course</span> below</p>
        <input type="text " placeholder='type delete course  ' className=' focus:outline-none px-2  rounded-lg my-4 py-0.5 text-prime ' onChange = {(event)=>handelDeleteCourse(event)} />

      <div className=' flex w-full justify-around items-center my-6'>

        {deleteInput? <button className=' deleteButton ' onClick={()=>deleteCourse(course)}> delete </button>:<button className=' deleteButton  text-gray-700 border-gray-700 hover:bg-white/30'> delete </button>} 
          <button className=' editButton ' onClick={()=>params.setOpenDelete(false)} > cancel </button>
      </div>
    </div>

  )
}
