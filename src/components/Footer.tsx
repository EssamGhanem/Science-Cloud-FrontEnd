import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className=' flex flex-col justify-center gap-4 items-center mt-[100px] w-full bg-prime/90 py-2  bottom-[-5px]   '>

      <Link href={"/"} ><h1 className='py-1 font-kanit text-[54px] max-sm:text-[38px] text-white'>Science Cloud</h1></Link>

      {/* Social media */}
      
              
        <div className=' w-[300px] flex justify-around items-center mb-3   ' >
          {/* Facebook link */}
          <div className='w-[50px] h-[50px] '>
            <Link target="_blank" href={"https://www.facebook.com/amany.mahmoud.ghanem"} className='w-full h-full    '>
              <Image width={200} height={200} src={"/socialMedia/Whatsapp.png"} alt='whatsapp'  />
            </Link>
          </div>
          {/* Youtube link */}
          <div className=' w-[50px] h-[50px] ' >
            <Link target="_blank" href={"https://www.youtube.com/@science_cloud"} className='w-full h-full  flex justify-center '>
              <Image width={200} height={200} src={"/socialMedia/youtube.png"} alt='youtube' className='' />
            </Link>
          </div>
          {/* Whatsapp link */}
          <div className=' w-[50px] h-[50px]    '>
            <Link target="_blank" href={"https://www.facebook.com/amany.mahmoud.ghanem"} className='w-full h-full  flex justify-center '>
              <Image width={200} height={200} src={"/socialMedia/facebook.png"} alt='facebook' className='' />
            </Link>
          </div>

     

      </div>

      {/* copy rights */}
      <div>
        <p className='text-gray-400 pb-8'>Developed by <span className='font-bold underline'>EssamGhanem</span> <br/> | science-cloud&copy;2024</p>


      </div>

    </div>
  )
}
