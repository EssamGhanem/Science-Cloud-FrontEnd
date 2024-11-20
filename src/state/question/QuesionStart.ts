"use client";


import { createSlice } from "@reduxjs/toolkit"

interface questionsStart {
  value: boolean;
}
const initialState: questionsStart = {
  value: false,
};

const questionsStartSlice = createSlice({
  name: 'questionsStart',
  initialState,
  reducers: {
    setQuestionStart: (state) => {
      state.value = true;
    },
    setQuestionEnd:(state)=>{
      state.value=false;
    }

  }


});

export const { setQuestionStart,setQuestionEnd } = questionsStartSlice.actions
export default questionsStartSlice.reducer;