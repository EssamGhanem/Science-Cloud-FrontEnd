"use client";

import { configureStore } from "@reduxjs/toolkit";
import courseSessionReducer from "@/state/courseSessions/courseSession"
import sessionsReducer from '@/state/courseSessions/sessions'
import questionStartSReducer from '@/state/question/QuesionStart';
import selectedAnsReducer from '@/state/question/selectedAns';
import currentQuestionReducer from '@/state/question/currentQuestion';
import showAnsReducer from '@/state/question/showAns';
import resultReducer from '@/state/question/result';
export const store = configureStore({
  reducer:{
    
    session:sessionsReducer,
    questionStart:questionStartSReducer,
    selectedAns:selectedAnsReducer,
    currentQuestion:currentQuestionReducer,
    setShowAns:showAnsReducer,
    result:resultReducer,
    courseSessions:courseSessionReducer,
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;