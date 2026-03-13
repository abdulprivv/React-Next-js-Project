import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BreakSection from "./components/BreakSection";
import HowWeFixIt from "./components/HowWeFixIt";
import AisystemsStats from "./components/AisystemsStats";
import AiStackSection from "./components/AiStackSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BreakSection />
      <HowWeFixIt  />
      <AisystemsStats />
      <AiStackSection />
      <FooterSection />
    </>
  );
}