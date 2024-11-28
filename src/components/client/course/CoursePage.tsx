"use client";


import { courses } from '@/data';
import CourseNotFound from './CourseNotFound';
import CourseFound from './CourseFound';

export default function CoursePage(params: { courseId: string }) {
  const findCourse =courses.find((course)=>course.id===params.courseId)
  
  // const courses = useSelector((state: RootState) => state.courses.value);
  // // const [enrolled,setEnrolled] = useState(false);
  // const enrolled = true;
  // const course: course = courses[parseInt(params.courseId) - 1];
  // //course-sessions
  // const sessions = useSelector((state:RootState)=>state.session.value);
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(setSessions(course.sessions)) 
  
  // },[])
  
  return (

    findCourse == undefined? <CourseNotFound />:<CourseFound course = {findCourse} />

  )
}
