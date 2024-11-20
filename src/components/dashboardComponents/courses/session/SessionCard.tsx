"use client"
import { session } from '@/components/types';
import React from 'react'
import { useState } from 'react';
import UpdateSession from './UpdateSession';
import { FaRegWindowClose } from "react-icons/fa";
import Link from 'next/link';
import DeleteSession from './DeleteSession';




export default function SessionCard(params: { session: session }) {
  const session = params.session;

  const [openEdit, setOpenEdit] = useState(false)

  const openEditeForm = () => {
    setOpenEdit(true);
  }
  const closeEditeForm = () => {
    setOpenEdit(false);
  }

  const [deleteSession, setDeleteSession] = useState(false)

  const openDeleteSession = () => {
    setDeleteSession(true);
  }
  const closeDeleteSession = () => {
    setDeleteSession(false);
  }




  return (

    <div dir='rtl' className=' w-full  h-[50px] flex justify-between px-[20px] bg-black/20 my-2 p-1 '>

      <h3 className=' flex items-center  w-full mx-2'><Link className='w-full' href={'./session/' + session.id} >{session.title}</Link>  </h3>
      <div className='buttons flex gap-2 justify-between   text-[12px] items-center '>
        <button className=' p-2 bg-red-600 text-white rounded-[5px] duration-300 hover:shadow-prime  hover:scale-90 hover:shadow ' onClick = {()=>{openDeleteSession()}}  >Delete</button>
        <button className='p-2  bg-green-600 text-white rounded-[5px]  duration-300 hover:shadow-prime  hover:scale-90 hover:shadow ' onClick={() => { openEditeForm() }}>Update</button>

        {
          openEdit ?
            <div className=' AbsoluteForm ' >
              <button className=' fixed text-white top-[4%] right-[5%]
                        text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
                onClick={() => closeEditeForm()} ><FaRegWindowClose />
              </button> <UpdateSession session={session} />
            </div>
            :
            <></>

        }

{
          deleteSession ?
            <div className=' AbsoluteForm '  >
              <button className=' fixed text-white top-[4%] right-[5%]
                        text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
                onClick={() => closeDeleteSession()} ><FaRegWindowClose />
              </button> <DeleteSession  session ={session} />
            </div>
            :
            <></>

        }


      </div>
    </div>

  )
}
