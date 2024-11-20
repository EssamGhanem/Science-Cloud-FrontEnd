"use client";


import { createSlice } from "@reduxjs/toolkit"

interface showAns {
  value: boolean;
}
const initialState: showAns = {
  value: false,
};

const showAnsSlice = createSlice({
  name: 'showAns',
  initialState,
  reducers: {
    setShowAnsTrue: (state) => {
      state.value = true;
    },
    setShowAnsFalse:(state)=>{
      state.value=false;
    }

  }


});

export const { setShowAnsTrue,setShowAnsFalse } = showAnsSlice.actions
export default showAnsSlice.reducer;