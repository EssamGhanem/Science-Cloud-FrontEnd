"use client"
import { session } from '@/components/types';
import React from 'react'
import Link from 'next/link';



export default function SessionCard(params: { session: session }) {

  const session = params.session;




  return (

    <div className=' w-full  h-[40px] flex justify-between px-[20px]   bg-transparent'>

      <h3 className=' flex items-center  w-full mx-2'>
        <Link className='w-full' href={'/dashboard/sessions/' + session._id} >{session.title}</Link>
      </h3>
    </div>

  )
}
