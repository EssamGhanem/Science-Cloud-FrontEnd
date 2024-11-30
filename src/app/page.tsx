import HomePage from "@/components/client/Home/HomePage";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
      <>{<NavBar />}
        <div className="text-right  pt-[100px] ">
        
           <HomePage />
           <Footer/>
        </div>

      </>
  );
}
