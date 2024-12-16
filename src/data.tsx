
import { course, group, quizz, session,question} from "./components/types";
import { student } from "./components/types";
import { request } from "./components/types";





export const students: student[] = [

  {
    id: "1",
    name: "أحمد علي ",
    email: "test1@email.com",
    password: "123456789",

    school: "schoolName1",
    governorate: "governorateName1",
    city: "cityName1",
    academicYear:"4th Grade",
    courses: ['1', '2']
  },
  {
    id: "2",
    name: "محمد صلاح",
    email: "test2@email.com",
    password: "123456789",

    school: "schoolName2",
    governorate: "governorateName2",
    city: "cityName2",
    academicYear:"4th Grade",

    courses: ['3', '2']
  },
  {
    id: "3",
    name: "عمر محمد ",
    email: "test3@email.com",
    password: "123456789",

    school: "schoolName3",
    governorate: "governorateName3",
    city: "cityName3",
    academicYear:"5th Grade",

    courses: ['1', '3']
  },
  {
    id: "4",
    name: "مروان محسن",
    email: "test4@email.com",
    password: "123456789",

    school: "schoolName4",
    governorate: "governorateName4",
    city: "cityName4",
    academicYear:"6th Grade",

    courses: ['1', '2']
  },
  {
    id: "5",
    name: "محمد علي محمد",
    email: "test5@email.com",
    password: "123456789",

    school: "schoolName5",
    governorate: "governorateName5",
    city: "cityName5",
    academicYear:"5th Grade",

    courses: ['3', '2']
  },



]



export const questions : question[] =[
    {
      id:"1",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"both"
    },

    {
      id:"2",
      questionText:" ما هي أعلى قمة في العالم",
      answers:[{text:"قمة افرست"},{text:"قمة الهمالايا"},{text:"قمة عسير"}],
      correctAnswer:3,
      role:"both"
    },

    {
      id:"3",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"both"
    },

    {
      id:"4",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"both"
    },

    {
      id:"5",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"both"
    },
    {
      id:"6",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"both"
    },
    {
      id:"7",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"both"
    },
    {
      id:"8",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"both"
    },
    {
      id:"9",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"both"
    },
    {
      id:"10",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"both"
    },
    {
      id:"11",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"quizz"
    },
    {
      id:"12",
      questionText:"ما هي عاصمة فرنسا؟",
      answers:[{text:"القاهرة"},{text:"موسكو"},{text:"لندن"},{text:"باريس"}],
      correctAnswer:4,
      role:"quizz"
    },

]





export const quizzes:quizz[] = [
  {
    id:"1",
    time:10,
    numberOfQuestions:2,
    MCQId:["1","2","3","4","5"]
  }
]

export const sessions:session[] =[

  {
    id:"1",
    title:"الصف الرابع الدرس الأول",
    url:"https://www.youtube.com/embed/4gwjScNk1JY?si=tMNyebOYHZm0dVxF",
    MCQId:["1","2","3","4"],
    quizzId:"1",
    courseId:"1"
  },
  {
    id:"2",
    title:"الصف الرابع الدرس الثاني",
    url:"https://www.youtube.com/embed/hpinjS4vIeY?si=M-XRiLLWMcdrRpzy",
    MCQId:["5","6","7"],
     courseId:"1"
  },
  {
    id:"3",
    title:"الصف الرابع الدرس الثالث",
    url:"https://www.youtube.com/embed/vOZbh6zXh50?si=rh_tRO3mVSBDdZYt",
    MCQId:["8","9","10","11","12"],
     courseId:"1"
  },
  {
    id:"4",
    title:"الصف الخامس الدرس الاول",
    url:"https://www.youtube.com/embed/vOZbh6zXh50?si=rh_tRO3mVSBDdZYt",
    MCQId:["8","9","10","11","12"],
     courseId:"2"

  },
  {
    id:"5",
    title:"الصف الخامس الدرس الثاني",
    url:"https://www.youtube.com/embed/vOZbh6zXh50?si=rh_tRO3mVSBDdZYt",
    MCQId:["8","9","10","11","12"],
     courseId:"2"

  }
  
  
]



export const groups : group[] = [
  
  {
    id:"1",
    title:"Unite[1]-concept[1]",
    sessions:["1","2"]

  },
  {
    id:"2",
    title:"Unite[1]-concept[2]",
    sessions:["3"]

  },
  {
    id:"3",
    title:"Unite[1]-concept[1]",
    sessions:["4","5"]

  }
]




export const courses : course[] =[

  {
    id: "1",
    title: "الصف الرابع الترم الاول",
    description: " كورس كامل متكامل شرح العلوم بتفصيل التفاصيل مع الاستاذه: أماني محمود غانم",
    price: "500",
    image: "/coursesImg/Grade-4.png",
    numberOfstudents: 20,
    groupsId:["1","2"],
    studentsId:["4","2","3"]
  }
,
  {
    id: "2",
    title: "الصف الخامس الترم الاول",
    description: " كورس كامل متكامل شرح العلوم بتفصيل التفاصيل مع الاستاذه: أماني محمود غانم",
    price: "400",
    image: "/coursesImg/Grade-4.png",
    numberOfstudents: 20,
    groupsId:["3"],
    studentsId:["3"]
  }

]



export  const requests :request[] = [
  {
    id:'1',
    studentId:"1",
    courseId:"1",
    state:"accepted",
    img: "/requestImg/requestTestImg.jpeg"

  },
  {
    id:'2',
    studentId:"2",
    courseId:"1",
    state:"pending",
    img:""

  },
  {
    id:'3',
    studentId:"3",
    courseId:"2",
    state:"pending",
    img:""

  },
  {
    id:'4',
    studentId:"4",
    courseId:"2",
    state:"rejected",
    img:""

  },
]




