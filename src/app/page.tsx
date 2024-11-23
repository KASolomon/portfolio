import HomeSection from "@/components/HomeSection";
import NavBar from "@/components/NavBar";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import Technologies from "@/components/Technologies";
import SocialSection from "@/components/SocialSection";
import ToggleModeButton from "@/components/ToggleModeButton";


export default function Home() {

  return (<>
        <NavBar />
    <div className="mx-6 md:mx-24 pb-16 pt-8 px-4  rounded-md dark:shadow-none shadow-lg shadow-gray-300">
<ToggleModeButton/>
        <HomeSection />
        <ExpertiseSection />
        <ProjectsSection />
        <EducationSection/>
        <Technologies/>
      </div>
        <SocialSection/>
  </>
  );
}
