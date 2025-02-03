import React from 'react'
import HomeCourseCard from './HomeCourseCard';
// import axios from 'axios';
import { course } from '@/components/types';

// const getCourses = async ()=>{

//   try{
//     const res = await axios.get('http://localhost:5000/api/courses');
//     const courses = res.data.courses;
//     return courses;
//   }catch(e){
//     console.log(e);
//     return [];
//   }

// }


export default  function CoursesSecion() {


  const lastCourses:course[] = [];
  

  return (

    <div className='flex flex-col items-center'>
      
      {/* Title */}
      <p className='text-center text-prime text-[38px] font-cairo  mb-12 p-4 font-bol w-fit text- max-sm:text-[28px] '> أحدث الدورات  </p>

      {/* Courses list */}

      <div className=' w-full h-full flex justify-around items-start pb-8 flex-wrap'>
        {
          lastCourses.map(( course) => {
            return <HomeCourseCard course={course} key={course._id} />;
          })
        }

      </div>


    </div>
   
  )
}
