"use client";
import React from 'react'

export default function TwoChoice() {
  return (
    <div className='w-full bg-black/20 mt-[70px] pb-[120px]'>

      <div className=' h-[550px] flex justify-center  bg-red-950 '> 
        {/* Left */}
        <div className='left w-[50%] h-full bg-red-950 p-5 '>

        </div>
        
     
        {/* Right */}
        <div className='Right w-[60%] h-full bg-blue-950 pl-[12%] p-5   ' 
        
        style={{clipPath:" polygon(0% 0% , 100% 0% , 100% 100% ,20% 100%  ); "}}
        >

        </div>
     
      </div>


    </div>
  )
}
