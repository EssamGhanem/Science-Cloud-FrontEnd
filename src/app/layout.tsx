
import type { Metadata } from "next";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
import "./globals.css";


export const metadata: Metadata = {
  title: "Science Cloud",
  description: "Science Cloud is an educational platform",


};





export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="ar"   >
      <head >


        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="icon" href='/favicon.ico' />

      </head>
      <body   >


          {children}


      </body>


    </html>
  );
}
