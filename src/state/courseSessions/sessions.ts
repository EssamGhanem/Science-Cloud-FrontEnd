"use client";
import { session } from "@/components/types"

import { createSlice } from "@reduxjs/toolkit"
interface sessionsState {
  value: session[];
}
const initialState: sessionsState = {
  value: [],
};

const sessionsSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setSessions: (state, action) => {
      state.value = action.payload;
    }
  }


});

export const { setSessions } = sessionsSlice.actions
export default sessionsSlice.reducer;