import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import PageLayout from "./components/PageLayout";
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import SpaceSection from "./sections/SpaceSection";
import PromotionsSection from "./sections/PromotionsSection";
import VisitSection from "./sections/VisitSection";
import AtmosphereSection from "./sections/AtmosphereSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <SmoothScroll>
      <PageLayout>
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <SpaceSection />
        <PromotionsSection />
        <VisitSection />
        <AtmosphereSection />
        <FooterSection />
      </PageLayout>
    </SmoothScroll>
  );
}

export default App;