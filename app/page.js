import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <div className="w-full flex flex-col ">
      <Nav />
      <Hero />
      <Quote />
      <CTA additionalInfo={true} />
      <Footer />
    </div>
  );
}
