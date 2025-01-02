import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Quote from "@/components/Quote";

export default function Aurora() {
  return (
    <div className='w-full flex flex-col'>
      <Introduction />
      <Quote />
      <Footer />
    </div>
  );
}
