import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <>
      <div className="h-fit py-[100px] bg-prime max-sm:h-fit relative w-full bg-contain">
        {/* Background Layer */}
        <div
          className="absolute inset-0 backgroundImgSize max-sm:sm-backgroundImgSize w-full h-full 
          animate-moveBackgroundImage max-md:md-backgroundImgSize max-sm:animate-moveBackgroundImageSm  max-md:animate-moveBackgroundImageMd "
          style={{
            backgroundImage: "url('/home_bg_img.png')",
            opacity: 0.07, 
            zIndex: 1,
          }}
        ></div>

        {/* Content Layer */}
        <div className=" relative z-10 h-full w-full justify-center items-center px-[4%] ">

          <div className="relative w-[100%] h-[80%]  flex justify-between items-center max-sm:flex-col">
            {/* Left Section */}
            <div className='w-[45%] flex justify-center items-center flex-col'>

              <Image src={"/hero_img1.png"} width={450} height={450} alt='img' />
            </div>

            {/* Right Section */}
            <div className=' w-[45%] flex justify-center items-center flex-col mt-10  '>

              <p className="text-white font-cairo text-[28px] max-sm:text-[18px]  ">
                مرحبا بك في منصة
              </p>
              <div className='inline-block'>
                <h1 className='text-white t  text-[72px] font-kanit max-lg:text-[60px] max-md:text-[48px]   max-sm:text-[44px] 
                  typingAnimation border-r-2 border-transparent pr-1 mb-4 '>Science Cloud</h1>
              </div>

              <button className='bg-white w-[250px] py-1 rounded-lg font-cairo
               text-[22px] max-sm:text-[18px] max-md:text-[20px]  font-bold text-prime'>إنضم الأن</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
