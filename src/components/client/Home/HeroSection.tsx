import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <>
      <div className="h-fit bg-prime py-5  max-sm:h-fit relative w-full bg-contain">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-contain  "
          style={{
            backgroundImage: "url('/home_bg_img.png')",
            opacity: 0.07, // Only applies to this layer
            zIndex: 1,
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 h-full w-full justify-center items-center">

          <div className="relative w-[90%] h-[80%]  flex justify-between items-center max-sm:flex-col">
            {/* Left Section */}
            <div className='w-[45%] flex justify-center items-center flex-col'>
                <Image src={"/hero_img1.png"} width={400} height={400} alt='img' />
            </div>

            {/* Right Section */}
            <div className=' w-[45%] flex justify-center items-center flex-col '>
            <p className="text-white font-cairo text-[28px] max-sm:text-[18px]  ">
                مرحبا بك في منصة 
              </p>
              <h1 className='text-white font-kanit text-[44px] max-sm:text-[32px] text-center '>Science Cloud</h1>
                  <button className='bg-white w-[250px] py-1 rounded-lg font-cairo text-[22px] max-sm:text-[18px]  font-bold text-prime'>إنضم الأن</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
