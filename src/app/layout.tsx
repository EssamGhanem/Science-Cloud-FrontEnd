
import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Science Cloud",
  description: "Science Cloud is an educational platform",


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  
  return (
    <html lang="ar">
      {/* <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" /> */}
      <link
        rel="icon"
        href='/app/favicon.ico'
      />
      <body
        className={` antialiased  h-[200vh] `}
      >
      
        {children}
       
        

      </body>
    </html>
  );
}
