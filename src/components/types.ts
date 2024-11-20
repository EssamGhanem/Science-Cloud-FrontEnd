
export type question = {
  
 
  questionText:string;
  image?:string;
  answers:{
    text?:string;
    image?:string;
  }[];
  correctAnswer:number;

}


export type session={
  id:string;
  title:string;
  url:string;
  MCQ:question[]
};

export type course = {
  id:string;
  title:string;
  description:string;
  price:string;
  image:string;
  numberOfstudents:number;
  sessions:session[];
  students:string[];
}
 type acadmicYaers= "4th Grade"|"5th Grade"|"6th Grade"
export type student = {

  id:string;
  name:string ;
  email:string;
  password:string;

  school:string;
  academicYear:acadmicYaers;
  governorate:string;
  city:string;

  courses:string[];

}

type reqState = "pending" | "accepted" | "rejected";
export type request = {
  id:string;
  studentId: string ;
  courseId:string ;
  state: reqState;
}




