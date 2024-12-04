"use client";
import { createSlice } from "@reduxjs/toolkit"

 interface courseSessions{
  value:string[];
 }
const initialState : courseSessions={
  value:[],
};

const courseSessionsSlice  = createSlice({
  name:'courseSessions',
  initialState,
  reducers:{
    setCourseSessionsClear :(state)=>{
      state.value = [];
    },
    setCourseSessions:(state,{payload})=>{
      state.value = payload;
    },
  }

});


export const { setCourseSessionsClear,setCourseSessions} = courseSessionsSlice.actions
export default courseSessionsSlice.reducer;