"use client";
import '@/app/globals.css';
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import clsx from 'clsx';

const pages = [
  {
    href: "/",
    label: "الرئيسيه"
  },
  {
    href: "/courses",
    label: "الدورات"
  },
  {
    href: "/contact",
    label: "تواصل\xa0\xa0معانا"
  },
  {
    href: "/myprofile",
    label: "صفحتي"
  },
  {
    href: "/dashboard",
    label: "Dashboard"
  }

]


export default function NavBar() {

  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openClose = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false)
    }
    else {
      setMenuIsOpen(true)
    }


  }
 
  return (
    <>


      <nav className='px-[5%] bg-white flex flex-row-reverse md:h-[100px] h-[70px] w-[100%] 
           fixed top-0 justify-between items-center   shadow-lg z-20'>

        <div className='logo'>
          <Link href={'/'}>
            <h1 className='font-kanit font-bold md:text-[28px] text-[22px] text-secondary  text-center '>Science Cloud</h1>
          </Link>

        </div>
        
        
        <div className='pages items-center hidden lg:flex 
        flex-row-reverse gap-4   justify-around w-fit '>
          {
            pages.map(ele => {
              const isActive = pathname == ele.href ? "isActive" : "";
              return <Link href={ele.href} key={ele.label} className={ " p-2 lg:w-[100px]  w-fit text-center  "} >

                <span className={isActive + ' transform hover:scale-125 transition duration-300 p-1  hover:bg-red-0  font-cairo lg:text-[18px]  text-[16px] inline-block'} >{ele.label}  </span>
              </Link>

            })

          }
        </div>


        <div className='auth lg:text-[16px] text-[12px]  flex-row-reverse justify-center gap-4 w-[30%] text-center hidden md:flex'>
          <Link href={'/login'} className=' font-cairo font-bold border-2 border-prime px-3 py-1 text-prime'>تسجيل الدخول</Link>
          <Link href={'/register'} className=' font-cairo font-bold border-prime border-2 bg-prime px-3 py-1 text-white '> انشاء حساب</Link>
        </div>

        <button className='hover:scale-125 duration-300 lg:hidden' onClick={() => openClose()} >
          <TiThMenu className='w-20 h-7 ' />
        </button>


      </nav>

          {/* sidebar  */}
      <div onClick={() => openClose()} className={clsx("w-full h-full z-20 bg-black/50 fixed top-0 translate-x-[-105%] duration-200 ", menuIsOpen && "translate-x-[0%] ")}>
        <div className={clsx('sidebar w-[250px]  md:w-[350px] h-full bg-white hid p-5 duration-500 translate-x-[-105%]  ', menuIsOpen && "translate-x-[0%] ")}>
          <div className='text-right'>
            <button className='bg-prime p-1 text-white rounded-[5px] ' onClick={() => openClose()}><GrClose /></button>
          </div>


          <div className='pages items-center flex flex-col w-[100%] justify-around pt-15'>
            {
              pages.map(ele => {
                const isActive = pathname == ele.href ? "isActive" : "";
                return <Link href={ele.href} key={ele.label} className={isActive + " p-2 text-center  "} >

                  <span className=' transform hover:scale-125 transition duration-300 p-1  hover:bg-red-0  font-cairo  text-[22px] block' >{ele.label}  </span>
                </Link>

              })

            }
          </div>

        </div>

      </div>



    </>
  )
}
