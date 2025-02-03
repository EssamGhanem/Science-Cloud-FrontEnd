"use client";
import '@/app/globals.css';
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner7 } from "react-icons/im";
import Image from 'next/image';
import { IoLogOutOutline } from "react-icons/io5";
import { login, logout } from '@/state/userState/authenticate';
import api from '@/utils/api';
import { RootState } from '@/app/store/store';

// import api from '@/utils/api';

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
    href: "/dashboard/courses",
    label: "Dashboard"
  }

]






const NavBar = () => {

  const pathname = usePathname();
  const [loding, setLoding] = useState(true)
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useSelector((state: RootState) => state.userAuthentication)




  const Logout = async () => {

    api.get('http://localhost:5000/api/auth/logout', {
      withCredentials: true

    },)
    dispatch(logout());
    router.refresh();
  }

  const openClose = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false)
    }
    else {
      setMenuIsOpen(true)
    }


  }

  const getUser = async () => {
    try {
      const res = await api.post('http://localhost:5000/api/auth/refresh-token', {},{ withCredentials: true });
      dispatch(login({ user: res.data.user, accessToken: res.data.accessToken }))
      setLoding(false);
      return res.data;
    }
    catch (e) {
      console.log(e);
      setLoding(false);
      return null;
    }

  }



  useEffect(() => {

    getUser()
  
  }, [])




  return (
    <>


      <nav className='px-[5%] bg-white flex flex-row-reverse md:h-[100px] h-[70px] w-[100%] 
           fixed top-0 justify-between items-center   shadow-lg shadow-black/30 z-20'>

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
              return <Link href={ele.href} key={ele.label} className={" p-2 lg:w-[100px]  w-fit text-center  "} >

                <span className={isActive + ' transform hover:scale-125 transition duration-300 p-1  hover:bg-red-0  font-cairo lg:text-[18px]  text-[16px] inline-block'} >{ele.label}  </span>
              </Link>

            })

          }
        </div>

        {
          loding ? <p className='text-prime text-[32px] animate-spin text-center  duration-500 flex justify-center '><ImSpinner7 /></p>
            : user ? <div className=' flex items-center w-fit'><Image src={user.photo} alt='img' height={50} width={50} />
              <p className=' text-[22px]  font-kanit text-secondary'>{user.fullName}</p>
              <IoLogOutOutline className=' text-[22px] pl-[10px] w-[30px] duration-300 hover:scale-125 text-red-500  cursor-pointer' onClick={() => Logout()} />
            </div>
              :
              <div className='auth lg:text-[16px] text-[12px]  flex-row-reverse justify-center gap-4 w-[30%] text-center hidden md:flex'>
                <Link href={'/login'} className=' font-cairo font-bold border-2 border-prime px-3 py-1 text-prime'>تسجيل الدخول</Link>
                <Link href={'/register'} className=' font-cairo font-bold border-prime border-2 bg-prime px-3 py-1 text-white '> انشاء حساب</Link>
              </div>

        }



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








export default NavBar;