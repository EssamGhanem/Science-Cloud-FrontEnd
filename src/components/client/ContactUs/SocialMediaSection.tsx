import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


import Facebook from "../../../../public/socialMedia/facebook.png";
import Whatsapp from "../../../../public/socialMedia/whatsapp.png";
import Youtube from "../../../../public/socialMedia/youtube.png";




export default function SocialMediaSection() {
  return (
    <>
      <h1 className=' w-full p-2 text-center text-[25px] mt-[40px] font-kanit text-prime '> Social Media </h1>



      <div className='w-full flex justify-around items-center pt-[30px] max-sm:flex-col   ' >
         {/* Facebook link */}
        <div className=' w-[20%] max-sm:w-full max-sm:rounded-none  bg-blue-800/30  rounded-lg '>
          <Link target="_blank" href={"https://www.facebook.com/amany.mahmoud.ghanem"} className='w-full h-full   flex justify-center  '>
            <Image src={Facebook} alt='facebook' className=''  />
          </Link>
        </div>
        {/* Youtube link */}
        <div className=' w-[20%] max-sm:w-full  max-sm:rounded-none  bg-red-800/30  rounded-lg  '>
          <Link target="_blank" href={"https://www.youtube.com/@science_cloud"} className='w-full h-full  flex justify-center '>
            <Image src={Youtube} alt='facebook' className=''  />
          </Link>
        </div>
        {/* Whatsapp link */}
        <div className=' w-[20%] max-sm:w-full max-sm:rounded-none   bg-green-800/30  rounded-lg    '>
          <Link target="_blank" href={"https://www.facebook.com/amany.mahmoud.ghanem"} className='w-full h-full  flex justify-center '>
            <Image src={Whatsapp} alt='facebook' className=''  />
          </Link>
        </div>

      </div>



    </>
  )
}
