import { course } from "./components/types";
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

// export type request = {
//   id:string;
//   studentId: string ;
//   courseId:string ;
//   state: reqState;
//   img:string;
// }



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





















export const courses: course[] = [
  {
    id: "1",
    title: "الصف الرابع الترم الاول",
    description: " كورس كامل متكامل شرح العلوم بتفصيل التفاصيل مع الاستاذه: أماني محمود غانم",
    price: "500",
    image: "/coursesImg/Grade-4.png",
    numberOfstudents: 20,
    sessions: [
      {
        id: "1",
        title: "session 1",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: "what is your fav color ???? what is the sun ??",
            answers: [
              {
                text: "red"
              },
              {
                text: "green"
              },
              {
                text: "white"
              },
              {
                text: "black"
              }
            ],
            correctAnswer: 3
          }, {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }, {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      }, {
        id: "2",
        title: "session 2",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 1
          }, {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }, {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "3",
        title: "session 3",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "4",
        title: "session 4",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      },
    ],
    students:["1","2","3"]
  },

  {
    id: "2",
    title: "الصف الرابع الترم الثاني",
    description: "  كامل متكامل شرح العلوم بتفصيل التفاصيلكامل متكامل شرح العلوم بتفصيل التفاصيلكامل متكامل شرح العلوم بتفصيل التفاصيلكامل متكامل شرح العلوم بتفصيل التفاصيل كورس كامل متكامل شرح العلوم بتفصيل التفاصيل  مع الاستاذه: أماني محمود غانم",
    price: "600",
    image: "/coursesImg/Grade-4.png",
    numberOfstudents: 30,
    sessions: [
      {
        id: "1",
        title: "session 1",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      }, {
        id: "2",
        title: "session 1",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "3",
        title: "session 1",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      }
    ],
    students:["4","2","3"]
  }
  ,
  {
    id: "3",
    title: "الصف الخامس الترم الاول",
    description: " كورس كامل متكامل شرح العلوم بتفصيل التفاصيل مع الاستاذه: أماني محمود غانم",
    price: "700",
    image: "/coursesImg/Grade-4.png",
    numberOfstudents: 44,
    sessions: [
      {
        id: "1",
        title: "session 1",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      }, {
        id: "2",
        title: "session 1",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "3",
        title: "session 1",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      }
    ],
    students:["2","5","3"]

  },

  {
    id: "4",
    title: "الصف الخامس الترم الاول",
    description: " كورس كامل متكامل شرح العلوم بتفصيل التفاصيل مع الاستاذه: أماني محمود غانم",
    price: "900",
    image: "/coursesImg/Grade-4.png",
    numberOfstudents: 120,
    sessions: [
      {
        id: "1",
        title: "session 1",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      }, {
        id: "2",
        title: "session 1",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "3",
        title: "session 1",
        url: "https://www.youtube.com/embed/DJrcRAELDNU?si=7NQfG63RNX-m0aKq",
        MCQ: [
          {
            questionText: " ما هي اكبر دوله في العالم من حيث المساحه ",
            answers: [
              {
                text: "الصين"
              },
              {
                text: "روسيا"
              },
              {
                text: "المغرب"
              },
              {
                text: "البرازيل"
              }
            ],
            correctAnswer: 2
          }
        ]
      }
    ],
    students:["4","2","3"]

  }


]