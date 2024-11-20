"use client";
import { course } from "@/components/types"
import { courses } from "@/data";
import { createSlice } from "@reduxjs/toolkit"
 interface courseState{
  value:course[];
 }
const initialState : courseState={
  value:courses,
};

const coursesSlice  = createSlice({
  name:'courses',
  initialState,
  reducers:{
  }

});



export default coursesSlice.reducer;