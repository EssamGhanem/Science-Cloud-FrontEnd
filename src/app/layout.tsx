
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
    <html lang="ar"   >
      <head >

     
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <link rel="icon" href='/favicon.ico' />

      </head>
      <body className=" min-h-[100vh] overflow-x-hidden  " >

        {children}
      </body>


    </html>
  );
}
