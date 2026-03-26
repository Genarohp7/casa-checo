import SmoothScroll from "./components/SmoothScroll";
import PageLayout from "./components/PageLayout";
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import SpaceSection from "./sections/SpaceSection";
import PromotionsSection from "./sections/PromotionsSection";

function App() {
  return (
    <SmoothScroll>
      <PageLayout>
        <HeroSection />
        <ExperienceSection />
        <SpaceSection />
        <PromotionsSection />
      </PageLayout>
    </SmoothScroll>
  );
}

export default App;