import { student } from '@/components/types'
import React from 'react'
import CourseStudentCard from '../../student/CourseStudentCard';

export default function CourseStudents(params:{students:(student|undefined)[]}) {
  
  const students = params.students;
  
  return (
    <div>
      {
        students!=undefined?<div>
          {students.map((student)=>{
            
            return student==undefined?<></>: <CourseStudentCard key={student.id} student={student} />
          })}</div>
        :<></>

      }

    </div>
  )
}
