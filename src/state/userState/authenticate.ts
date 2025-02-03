// slices/userSlice.js
import { user } from '@/components/types';
import { createSlice } from '@reduxjs/toolkit';

type initialState = {
  isAuthenticated:boolean;
  user:user | null;
  accessToken:string | null;
}

const initialState: initialState = {
  isAuthenticated: false,
  user:null,
  accessToken: null 

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken =  action.payload.token;

    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null ;
    },
    setToken:(state,action)=>{
        state.accessToken = action.payload.token;
    }
  },
});

export const { login, logout , setToken } = userSlice.actions;
export default userSlice.reducer;
