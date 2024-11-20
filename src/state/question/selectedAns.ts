"use client";


import { createSlice } from "@reduxjs/toolkit"



interface selectedAns {
  value: number[];
}

const initialState: selectedAns = {
  value: [],
};


const selectedAnsSlice = createSlice({
  
  name: 'selectedAns',
  initialState,
  reducers: {
    addAns: (state,action)=> {
      state.value.push(action.payload);  
    },
    resetAns:(state)=>{
      state.value=[];
    }


  }


});

export const {addAns, resetAns} = selectedAnsSlice.actions;
export default selectedAnsSlice.reducer;