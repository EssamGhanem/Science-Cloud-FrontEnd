import type { Metadata } from "next";
import favicon from '@/app/favicon.ico';

import "./globals.css";
import NavBar from "@/components/NavBar";



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
        className={` antialiased  pt-[150px] h-[300vh] `}
      >
        <NavBar />
        {children}

      </body>
    </html>
  );
}
