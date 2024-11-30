"use client";
import NavBar from "@/components/NavBar";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import Footer from "@/components/Footer";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <div className=" max-md:pt-[100px] md:pt-[150px] relative  ">
        <NavBar />
        <Provider store={store}>
          {children}
        </Provider>
       

        <Footer/>
      </div>


    
  );
}
