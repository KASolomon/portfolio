import HomeSection from "@/components/HomeSection";
import NavBar from "@/components/NavBar";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import Technologies from "@/components/Technologies";
import SocialSection from "@/components/SocialSection";


export default function Home() {

  return (<>
        <NavBar />
    <div className="px-10 md:px-24 pb-8">

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
