import Image from "next/image";
import Link from "next/link";
import woman_working from "../public/woman_work.jpg"

export default function CTA() {
  return (
    <div className=' w-full bg-gradient-to-r md:bg-none to-[#75A896] from-[#53786B] bg-slate-50 py-36 md:py-80 px-4 flex justify-center items-center'>
      <div className='flex flex-row-reverse justify-center gap-20 max-w-7xl w-full'>
        <div className='hidden md:block w-96 relative max-w-full overflow-hidden h-96 rounded-xl'>
          <Image
            src={woman_working}
            fill
            alt='Kaksi naista työskentelee tietokoneella'
            className="object-cover w-full h-full"
          />
        </div>
        <div className=' flex flex-col justify-center items-start'>
          <h3 className=' text-4xl font-bold text-white md:text-green-950 mb-4'>
            Kehitä itseäsi ammattilaisena
          </h3>
          <p className=' leading-6 text-lg max-w-xl text-slate-200 md:text-green-900  mb-12'>
            Psyykkinen valmennuksen avulla voit saada apua monenlaisiin
            haasteisiin ja voimme työskennellä tapaamisilla muun muassa stressin
            hallinnan ja paineensiedon, vireystilan säätelyn, motivaation,
            tavoitteiden asettelun ja itseluottamuksen vahvistamisen parissa.{" "}
          </p>
          <div className='flex flex-col justify-center md:justify-start items-center md:flex-row gap-4'>
            <Link
              href='/varaus'
              className='bg-white md:bg-green-800 min-w-64 md:min-w-0 text-center text-green-950 md:text-white px-6 py-3 rounded-lg font-medium md:hover:bg-gray-100 transition-colors'
            >
              Varaa Tapaaminen
            </Link>
            <Link
              href='/lue-lisaa'
              className='border min-w-64 md:min-w-0 text-center border-white md:border-green-800 text-white md:text-green-800 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors'
            >
              Lue Lisää
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
