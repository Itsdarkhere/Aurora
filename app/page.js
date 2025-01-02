import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import MeetingInfo from "@/components/MeetingInfo";
import Pricing from "@/components/Pricing";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <MeetingInfo />
      <Pricing />
      <Introduction />
      {/* <CTA additionalInfo={true} /> */}
      <Quote />
      <Footer />
    </div>
  );
}
