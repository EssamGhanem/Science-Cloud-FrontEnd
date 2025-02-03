'use client'
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
        <div className="left w-[20%]">
          <Sidebar />
        </div>
        <div className="right   w-[80%]">
        <Provider store={store}>
          <NavBar />
          
            {children}
          </Provider>
        </div>
      </div>



    </>



  );
}
