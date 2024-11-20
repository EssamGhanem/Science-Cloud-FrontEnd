"use client";
import NavBar from "@/components/dashboardComponents/NavBar";
import Sidebar from "@/components/dashboardComponents/Sidebar";
import { Provider } from "react-redux";
import { store } from "@/app/store/store"; 


export default function RootLayout({
  children,
 
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (

    <>
    <div className="flex flex-row h-full">
      <div className="left w-[25%]">
      <Sidebar />
      </div>
      <div className="right   w-full">
        <NavBar/>
        <Provider store={store}>
        {children}
        </Provider>
      </div>
    </div>



    </>



  );
}
