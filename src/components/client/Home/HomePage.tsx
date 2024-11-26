import React from 'react'
import HeroSection from './HeroSection'
import TwoChoice from './TwoChoice'
import CoursesSecion from './CoursesSecion'

export default function HomePage() {
  return (
    <div className=' flex justify-center w-full flex-col '>

    <HeroSection />
    <TwoChoice />
    <CoursesSecion />
      

    </div>
  )
}
