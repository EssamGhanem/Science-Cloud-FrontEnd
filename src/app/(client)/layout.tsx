'use client';
import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import Footer from "@/components/Footer";
import NavBarWarpper from "@/components/NavBar/NavBarWarpper";






export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 


  return (

    <div className=" max-md:pt-[100px] md:pt-[150px] relative  ">
      <Provider store={store}>
      <NavBarWarpper />
        {children}
      </Provider>


      <Footer />
    </div>



  );
}
