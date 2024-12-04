type quesitonRole =  "practice" | "quizz" | "both" ;

export type question = {
  
 id:string;
  questionText:string;
  image?:string;
  answers:{
    text?:string;
    image?:string;
  }[];
  correctAnswer:number;
  role:quesitonRole;

}

export type quizz ={
 
  id:string;
  time:number;
  numberOfQuestions:number;
  MCQId: string[]

}

export type group ={
  id:string;
  title:string,
  sessions :string[];
}

export type session={
  id:string;
  title:string;
  url:string;
  MCQId:string[];
  quizzId?:string;
};

export type course = {
  id:string;
  title:string;
  description:string;
  price:string;
  image:string;
  numberOfstudents:number;
  groupsId:string[];
  studentsId:string[];
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
  img:string;
}




