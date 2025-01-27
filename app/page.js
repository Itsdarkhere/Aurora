import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import MeetingInfo from "@/components/MeetingInfo";
import Pricing from "@/components/Pricing";
import Test from "@/components/Test";
import Themes from "@/components/Themes";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Introduction />
      <MeetingInfo />
      <Themes />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
