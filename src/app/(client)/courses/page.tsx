
import CourseList from '@/components/client/course/CourseList'
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

export default async function CoursesPage() {
  
  const  res = await getCourses();
  const courses = res?res:[];
  return (
    <>

      <div dir='rtl' className=' '>
        <CourseList courses={courses} />
      </div>

    </>
  )
}
