"use client";


import { createSlice } from "@reduxjs/toolkit"

interface currentQuestion {
  value: number;
}
const initialState: currentQuestion = {
  value: 0,
};

const currentQuestionSlice = createSlice({
  name: 'currentQuestion',
  initialState,
  reducers: {
    setCurrentQuestion: (state,action) => {
      state.value = action.payload;
    }

  }


});

export const { setCurrentQuestion} = currentQuestionSlice.actions
export default currentQuestionSlice.reducer;