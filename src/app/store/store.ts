"use client";

import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "@/state/course/courses"
import sessionsReducer from '@/state/course/sessions'
import questionStartSReducer from '@/state/question/QuesionStart';
import selectedAnsReducer from '@/state/question/selectedAns';
import currentQuestionReducer from '@/state/question/currentQuestion';
import showAnsReducer from '@/state/question/showAns';
import resultReducer from '@/state/question/result';
export const store = configureStore({
  reducer:{
    courses:coursesReducer,
    session:sessionsReducer,
    questionStart:questionStartSReducer,
    selectedAns:selectedAnsReducer,
    currentQuestion:currentQuestionReducer,
    setShowAns:showAnsReducer,
    result:resultReducer
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;