

export default function RootLayout({
  children,
  courses,
}: Readonly<{
  children: React.ReactNode;
  courses: React.ReactNode
}>) {
  return (

      <>
      <h1> Dashboard layout </h1>
        {children}
        {courses}
      </>

        

  );
}
