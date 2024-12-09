import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";

export default function Home() {
  return (
    <div className="w-full flex flex-col ">
      <Hero />
      <Quote />
      <CTA />
    </div>
  );
}
