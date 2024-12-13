import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Nav from "@/components/Nav";


export default function Aurora() {
  return (
    <div className="w-full flex flex-col  min-h-screen">
        <Nav />
        <Introduction />
        <CTA />
        <Footer />
    </div>
  );
}
