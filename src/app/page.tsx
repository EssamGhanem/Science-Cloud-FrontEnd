'use client'
import HomePage from "@/components/client/Home/HomePage";
import Footer from "@/components/Footer";
import NavBarWarpper from "@/components/NavBar/NavBarWarpper";



export default function Home() {
  


  
  return (
    <>


      <div className="text-right  pt-[100px] ">
        <NavBarWarpper />
        <HomePage />
    
        <Footer />
      </div>

    </>
  );
}
