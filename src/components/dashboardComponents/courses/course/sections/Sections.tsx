'use Client';
import { course, section } from '@/components/types';
import React, { useState } from 'react'
import SectionCard from './SectionCard';
import AddSectionForm from './AddSectionForm';
import { FaRegWindowClose } from "react-icons/fa";
import AddSesstionForm from '../../session/AddSesstionForm';


export default  function  Sections(params: { sections: section[], course: course }) {

  const [openAddSection, setOpenAddSectionForm] = useState(false)
  const [openAddSession, setOpenAddSessionForm] = useState(false)



  const course = params.course;
  const sections = params.sections;
  
  return (
    <>

      {
        openAddSection ? <div className=' AbsoluteForm flex-col '>            <button className=' fixed text-white top-[4%] right-[5%]
                                text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
          onClick={() => setOpenAddSectionForm(false)} ><FaRegWindowClose />
        </button>
          <AddSectionForm courseId={course._id} setOpenAddSectionForm={setOpenAddSectionForm} />
        </div> : ""

      }
      {
        openAddSession ? <div className=' AbsoluteForm flex-col '>            <button className=' fixed text-white top-[4%] right-[5%]
                                text-[40px] max-md:text-[25px] hover:scale-110 duration-200'
          onClick={() => setOpenAddSessionForm(false)} ><FaRegWindowClose />
        </button>
          <AddSesstionForm sections={sections} setOpenAddSessionForm={setOpenAddSessionForm} />
        </div> : ""

      }
      
      <div className=' w-full flex flex-col  font-kanit  '>

        <button onClick={() => setOpenAddSectionForm(true)} className='w-ful bg-prime/30 text-prime text-[20px] rounded-lg px-2 py-2 hover:text-white hover:bg-prime duration-300 mb-4 '> Add section</button>
        <button onClick={() => setOpenAddSessionForm(true)} className='w-ful bg-prime/30 text-prime text-[20px] rounded-lg px-2 py-2 hover:text-white hover:bg-prime duration-300 mb-4'> Add Session</button>
        {
          sections.map((section) => {
            return <div key={section._id}>
              <SectionCard section={section}  />
            </div>
          })
        }

      </div>

    </>


  )
}
