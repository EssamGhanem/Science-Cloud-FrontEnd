import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <>
      <div className="h-fit py-[100px] bg-prime max-sm:h-fit relative w-full bg-contain">
        {/* Background Layer */}
        <div
          className="absolute inset-0 backgroundImgSize max-sm:sm-backgroundImgSize 
          animate-moveBackgroundImage max-md:md-backgroundImgSize max-sm:animate-moveBackgroundImageSm  max-md:animate-moveBackgroundImageMd "
          style={{
            backgroundImage: "url('/home_bg_img.png')",
            opacity: 0.07, // Only applies to this layer
            zIndex: 1,
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 h-full w-full justify-center items-center px-[4%] ">

          <div className="relative w-[100%] h-[80%]  flex justify-between items-center max-sm:flex-col">
            {/* Left Section */}
            <div className='w-[45%] flex justify-center items-center flex-col'>

              <Image src={"/hero_img1.png"} width={450} height={450} alt='img' />
            </div>

            {/* Right Section */}
            <div className=' w-[45%] flex justify-center items-center flex-col mt-10  '>
            <svg
                fill="#ffffff"
          
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-10 0 540.001 512.001"
                className="stroke-therd/50 stroke-[3px] fill-transparent absolute z-[-1]   "
                  style={ { strokeDasharray:0, strokeDashoffset: 0 , animation:' cloudMove 8s ease-in-out infinite;'}}
              >
                <path
                  d="M344.355,143.77c-89.868-88-242.103-39.712-264.598,83.945C34.71,234.249,0,273.123,0,319.952
			c0,51.393,41.811,93.204,93.204,93.204h282.311c75.258,0,136.484-61.226,136.484-136.483
			C512,189.244,430.284,123.682,344.355,143.77z"
                />
              </svg>
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
