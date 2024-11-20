"use client";


import { createSlice } from "@reduxjs/toolkit"

interface result {
  value: boolean;
}
const initialState: result = {
  value: false,
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResultTrue: (state) => {
      state.value = true;
    },
    setResultFalse:(state)=>{
      state.value=false;
    }

  }


});

export const { setResultTrue,setResultFalse } = resultSlice.actions
export default resultSlice.reducer;