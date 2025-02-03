
import CoursePage from '@/components/client/course/CoursePage'
import { course } from '@/components/types';
import api from '@/utils/api';

import React from 'react'
async function getCourseData(id: string) {

  try {
    const res = await api.get(`http://localhost:5000/api/courses/` + id);
    const course: course = res.data.course;
    return course;
  } catch (e) {
    console.log("error in fetching");
    console.log(e);
  }

}

// This will trigger a static generation of this page
// export const revalidate = 10; // This means it will regenerate this page every 10 seconds, similar to ISR.

const  page = async ({ params }: { params: { courseId: string } }) => {
  const id = params.courseId;
  
  const course = await getCourseData(id);
  


  return (

    <div>
     {course ?<CoursePage course={course} />:<></> } 
    </div>
  )
}
export default  page ;