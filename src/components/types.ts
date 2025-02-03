type quesitonRole = "practice" | "quizz" | "both";
export type admin = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  role: "admin";
}
export type user = {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  parentsPhoneNumber: string;
  photo: string;
  AcadmicYear: string;
  governorate: string;
  city: string;
  courses: course[];
  quizzes:(string|quizz) [];
  correctQestions: (string|question)[] ;
  wrongQestion: (string|question)[];
  
  token: {
    type: string;
  },
  role: "student" | 'admin';
}
export type question = {

  _id: string;
  questionText: string;
  questionImg?: string;
  answers: {
    answerText?: string;
    answerImg?: string;
  }[];
  correctAns: number;
  role: quesitonRole;
  numberOfCorrectAnswers: number;
  numberOfWrongAnswers: number;

}

export type quizz = {
  title: string;
  _id: string;
  duration: number;
  numberOfQuestions: number;
  questions: question[]

}

export type section = {
  _id: string;
  title: string,
  sessions: session[];
  course: course;
}

export type session = {
  _id: string;
  title: string;
  videoLink: string;
  questions: question[];
  quizz?: quizz;
  course: course;
};

export type course = {
  _id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  students: user[];
  sections: section[];

}


type acadmicYaers = "4th Grade" | "5th Grade" | "6th Grade"
export type student = {

  id: string;
  name: string;
  email: string;
  password: string;

  school: string;
  academicYear: acadmicYaers;
  governorate: string;
  city: string;

  courses: string[];

}

type reqState = "pending" | "accepted" | "rejected";
export type request = {
  id: string;
  studentId: string;
  courseId: string;
  state: reqState;
  img: string;
}




