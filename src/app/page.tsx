import HomePage from "@/components/client/Home/HomePage";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
      <>{<NavBar />}
        <div className="text-right  pt-[100px] ">
        
           <HomePage />
        </div>

      </>
  );
}
