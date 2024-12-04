import React from 'react'
import Link from 'next/link'

//import react-icons
import { ImBooks } from "react-icons/im";
import { IoIosHome } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { IoMdAddCircle } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";

const Links = [

  {
    lable: "Home",
    href: "/dashboard",
    icon: <IoIosHome />
  },
  {
    lable: "courses",
    href: "/dashboard/courses",
    icon: <ImBooks />
  },
  {
    lable: "requests",
    href: "/dashboard/requests",
    icon: <VscGitPullRequestGoToChanges />
  },
  {
    lable: "students",
    href: "/dashboard/students",
    icon: <ImProfile />
  },

  {
    lable: "Create Courses",
    href: "/dashboard/create-course",
    icon: <IoMdAddCircle />
  },
  
  {
    lable: "Emails",
    href: "/dashboard/users-emails",
    icon: <MdMarkEmailUnread />
  },

]



export default function sidebar() {
  return (
    <div className='bg-secondary text-lg md:p-[0.5%] p-[1%] text-white
      flext flex-col h-[100vh] fixed w-[20%] z-10
    '>
      <div className='logo '>
        <h1 className='bold font-mono text-center lg:text-[18px] text-[14px] hover:text-[22px] duration-300'><Link href={'/'}> Science Clould</Link></h1>
        <p className='bold font-mono text-center lg:text-[18px] text-[14px]'>Dashboard</p>
      </div>
      <br />
      <div className='pages flex-col'>
        {
          Links.map(ele => {
            return <Link href={ele.href} key={ele.lable} className='flex  md:px-4 gap-4 mt-6 hover:bg-black/50 items-center 
                    py-2 duration-300 justify-center md:justify-start text-[22px]'>

              <p className='md:text-[22px] text-[24px] text-center'>{ele.icon}</p>  <p className='hidden md:block'>{ele.lable}</p>
            </Link>

          })
        }
      </div>

    </div>
  )
}
