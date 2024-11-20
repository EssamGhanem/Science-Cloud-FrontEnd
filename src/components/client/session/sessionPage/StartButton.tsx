import React from 'react'

export default function StartButton() {
  return (
    <div className='w-full h-[300px] flex justify-center items-center group '>

        <div className=' w-[150px] group-hover:shadow-start duration-300 text-white h-[150px] rounded-[100%] border-prime flex-col bg-prime group-hover:text-prime  group-hover:bg-white border-4 flex  justify-center items-center '>
            <p className=' font-kanit text-[24px]  ' > start </p>
            <p className=' font-kanit text-[16px]  ' > Questions  </p>
        </div>


    </div>
  )
}
