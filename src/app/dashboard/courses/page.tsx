
import AddCourse from '@/components/dashboardComponents/courses/course/AddCourse'
import CoursesList from '@/components/dashboardComponents/courses/course/CoursesList'
import { course } from '@/components/types';
import axios from 'axios';

import React from 'react'

async function getCourses(){
  try{
    const res = await axios.get(`http://localhost:5000/api/courses`);
    const courses:course[] =  res.data.courses;
    
    return courses;

   }catch(e){
    console.log("error in fetching");
   }
  
}


export default async  function page() {
    
  
    const res = await getCourses();
    const courses =   res? res :[];

  
  return (
    <div className='flex flex-col justify-center p-2 md:p-10 items-center '>
        <AddCourse/> 
        <CoursesList courses={courses} />    
    </div>
  )
}
