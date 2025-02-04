"use client";
import { session } from '@/components/types'
import Link from 'next/link';
import React from 'react'

import { MdOpenInNew } from "react-icons/md";



export default function SessionCard(params:{session:session}) {
  const session = params.session;

  return (
    <Link href={'/sessions/'+session._id} >
    
   
    <div dir='rtl' className=' p-2 rounded-md bg-gradient-to-t from-prime/60 to-prime/30 px-5 mb-4 flex justify-between 
    items-center hover:text-white hover:bg-prime  duration-300 '>
        <h3 className='hh3'>{session.title}</h3>

        <MdOpenInNew className=' text-lg ' />
    </div>



    </Link>
  )
}
