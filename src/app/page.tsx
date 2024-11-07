import HomeSection from "@/components/HomeSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="px-24 py-8">
      <div className=" flex flex-col ">
        <NavBar />
        <HomeSection/>
      </div>
    </div>
  );
}
