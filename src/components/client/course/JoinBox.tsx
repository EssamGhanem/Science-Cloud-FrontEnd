import Link from 'next/link'
import React from 'react'

export default function JoinBox() {
  return (
    <Link href={'./'}>
    <div className=' rounded-[5px] border-blue-800 border-2 
     mb-7 shadow-black shadow-lg p-10 flex justify-center hover:scale-125 duration-300 hover:shadow-prime  ' >
        <h2 className='hh2 text-center'>
          انضم الأن 
        </h2>
    </div>
    </Link>
  )
}
