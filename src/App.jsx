import SmoothScroll from "./components/SmoothScroll";
import PageLayout from "./components/PageLayout";
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import SpaceSection from "./sections/SpaceSection";
import PromotionsSection from "./sections/PromotionsSection";
import VisitSection from "./sections/VisitSection";

function App() {
  return (
    <SmoothScroll>
      <PageLayout>
        <HeroSection />
        <ExperienceSection />
        <SpaceSection />
        <PromotionsSection />
        <VisitSection />
      </PageLayout>
    </SmoothScroll>
  );
}

export default App;