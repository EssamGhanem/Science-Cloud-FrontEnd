'use client'
import { store } from '@/app/store/store'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { login} from '@/state/userState/authenticate';
import api from '@/utils/api';
import { useDispatch } from 'react-redux';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  
  
 

  return (

    <Provider store={store} >
      <div>{children}</div>
    </Provider>



  )
}
