import SmoothScroll from "./components/SmoothScroll";
import PageLayout from "./components/PageLayout";
import HeroSection from "./sections/HeroSection";
import InfoSection from "./sections/InfoSection";

function App() {
  return (
    <SmoothScroll>
      <PageLayout>
        <HeroSection />
        <InfoSection />
      </PageLayout>
    </SmoothScroll>
  );
}

export default App;