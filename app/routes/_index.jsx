import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Themes from "../components/Themes";
import Pricing from "../components/Pricing";
import MeetingInfo from "../components/MeetingInfo";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export const meta = () => {
  return [
    { title: "Psykologiaurora.fi - Psyykkinen valmennus" },
    { name: "description", content: "Tuen psyykkisenä valmentajana urheilijoiden ja liiketoiminnan ammattilaisten hyvinvointia ja menestystä." },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
      <Introduction />
      <Themes />
      <Pricing />
      <MeetingInfo />
      <CTA />
      <Footer />
    </>
  );
}
