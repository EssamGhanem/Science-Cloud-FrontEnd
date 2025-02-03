// app/course/[id]/page.tsx

import Course from '@/components/dashboardComponents/courses/course/Course';
import { course } from '@/components/types';
import axios from 'axios';
import React from 'react';

async function getCourseData(id: string) {

 try{
  const res = await axios.get(`http://localhost:5000/api/courses/`+id);
  const course:course =  res.data.course;
  return course;
 }catch(e){
  console.log("error in fetching");
 }

}

// This will trigger a static generation of this page
// export const revalidate = 10; // This means it will regenerate this page every 10 seconds, similar to ISR.

const page = async ({ params }: { params: { courseId: string } }) => {
  const id = params.courseId;
  const course = await getCourseData(id);


  return (

      <>
      {course? <Course course ={course} /> : <></>}
      </>
  );
};

export default page;
