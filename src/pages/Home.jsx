import Hero from "../components/home/Hero.jsx";
import Intro from "../components/home/Intro.jsx";
import FeaturedWork from "../components/home/FeaturedWork.jsx";
import AboutPreview from "../components/home/AboutPreview.jsx";
import ContactCTA from "../components/home/ContactCTA.jsx";

export default function Home() {
  return (
    <div className="page-fade">
      <Hero />
      <Intro />
      <FeaturedWork />
      <AboutPreview />
      <ContactCTA />
    </div>
  );
}
