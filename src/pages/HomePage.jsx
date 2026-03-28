import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";
import HeroSection from "../sections/HeroSection";
import SeasonalBanner from "../sections/SeasonalBanner";
import ExperienceSection from "../sections/ExperienceSection";
import SpaceSection from "../sections/SpaceSection";
import PromotionsSection from "../sections/PromotionsSection";
import VisitSection from "../sections/VisitSection";
import AtmosphereSection from "../sections/AtmosphereSection";
import FooterSection from "../sections/FooterSection";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;

    if (!targetId) return;

    const element = document.getElementById(targetId);

    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location]);

  return (
    <PageLayout>
      <Navbar />
      <HeroSection />
      <SeasonalBanner />
      <ExperienceSection />
      <SpaceSection />
      <PromotionsSection />
      <VisitSection />
      <AtmosphereSection />
      <FooterSection />
    </PageLayout>
  );
}

export default HomePage;