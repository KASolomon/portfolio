import HomeSection from "@/components/HomeSection";
import NavBar from "@/components/NavBar";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";


export default function Home() {

  return (
    <div className="px-10 md:px-24 py-8">
      <div className=" flex flex-col ">
        <NavBar />
        <HomeSection />
        <ExpertiseSection />
        <ProjectsSection />
        <EducationSection/>
      </div>
    </div>
  );
}
