'use client'
import { user } from '@/components/types';
import api from '@/utils/api';
import React, { useEffect, useState } from 'react'


const getUser = async () => {
  
  try {
    const res = await api.post('http://localhost:5000/api/auth/refresh-token', {},{ withCredentials: true });
    return res.data.user;
  }
  catch (e) {
    console.log(e);
    return null;
  }

}
export default function UserPage() {
  
  

  const[user , setUser] = useState<null | user>(null)

  useEffect(()=>{

    getUser().then((user)=>{
      
      setUser(user);
    }
    )
  })
  
  return (
    <div className='text-[42px]'>{user&& user.fullName}</div>
  )
}
