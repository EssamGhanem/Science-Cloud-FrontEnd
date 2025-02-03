'use Client'
import { section } from '@/components/types'
import React, { useState } from 'react'
import SessionsList from '../../session/SessionsList';

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import EditSectionForm from './EditSectionForm';
import { FaRegWindowClose } from 'react-icons/fa';
import DeleteSectionForm from './DeleteSectionForm';





export default function SectionCard(params: { section: section }) {

  const section = params.section;
  const sessions = section.sessions;


  //open close section 
  const [showSessions, setShowSessions] = useState(false);
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const toggleSection = () => {
    setShowSessions(!showSessions)
  };



  return (
    <>
      {
        openEdit ?
          <div className=' AbsoluteForm' >
            <button className=' fixed text-white top-[4%] right-[5%]
                                            text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
              onClick={() => setOpenEdit(false)} ><FaRegWindowClose />
            </button>
            <EditSectionForm section={section} setOpenEdit={setOpenEdit} /> : <></>
          </div>
          :
          <></>

      }

{
        openDelete ?
          <div className=' AbsoluteForm' >
            <button className=' fixed text-white top-[4%] right-[5%]
                                            text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
              onClick={() => setOpenDelete(false)} ><FaRegWindowClose />
            </button>
            <DeleteSectionForm section={section} setOpenDelete={setOpenDelete} /> : <></>
          </div>
          :
          <></>

      }
      <div className='w-full h-full     mb-4 border-[1px] border-gray-400  rounded-b-2xl overflow-hidden '>

        <div className='flex justify-between items-center  flex-col  '>
          
          <div onClick={()=>toggleSection()} className='flex max-sm:flex-col justify-between items-center px-2 w-full cursor-pointer border-b-[1px] border-gray-400 '> 
            <div className='w-[30%] mb-5'>
              <p className=' w-[70%] max-lg:w-[100%] font-kanit text-[22px] max-md:text-[20px]'>{section.title}</p>
              <p className='text-gray-400'>{sessions.length} sessions</p>
            </div>
            <MdOutlineKeyboardDoubleArrowDown className='text-[20px] max-md:text-[25px]  ' />

            <div className=' max-lg:w-[100%] w-[30%] flex justify-around items-center mb-5 '>
              <button className=' editButton' onClick={() => setOpenEdit(true)}>edit </button>
              <button onClick={() => setOpenDelete(true)} className='deleteButton '>delete</button>
            </div>

          </div>


          {/* section sessions */}

        
            <div className={` border-y-0 flex flex-col items-center justify-center w-full overflow-hidden transition-[max-height] duration-500 ease-in-out  ${showSessions ? "max-h-screen" : "max-h-0"}`}   >
              <SessionsList sessions={sessions} />
            </div>
         

        </div>
      </div>
    </>
  )
}


