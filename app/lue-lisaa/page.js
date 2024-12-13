import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";

export default function Aurora() {
  return (
    <div className='w-full flex flex-col  min-h-screen'>
      <Introduction />
      <CTA additionalInfo={false} />
      <Footer />
    </div>
  );
}
