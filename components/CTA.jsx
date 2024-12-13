import Image from "next/image";
import Link from "next/link";
import woman_working from "../public/woman_work.jpg";

export default function CTA({ additionalInfo }) {
  return (
    <div className=' w-full bg-slate-50 py-36 md:py-80 px-4 flex justify-center items-center'>
      <div className='flex flex-row-reverse justify-center gap-20 max-w-7xl w-full'>
        <div className='hidden md:block w-96 relative max-w-full overflow-hidden h-80 rounded-xl'>
          <Image
            src={woman_working}
            fill
            alt='Kaksi naista työskentelee tietokoneella'
            className='object-cover w-full h-full opacity-85'
          />
        </div>
        <div className=' flex flex-col justify-center items-start'>
          <h3 className=' text-4xl font-bold text-theme mb-4'>
            Kehitä itseäsi ammattilaisena
          </h3>
          <p className=' leading-6 text-lg max-w-xl text-theme  mb-12'>
            Psyykkinen valmennuksen avulla voit saada apua monenlaisiin
            haasteisiin ja voimme työskennellä tapaamisilla muun muassa stressin
            hallinnan ja paineensiedon, vireystilan säätelyn, motivaation,
            tavoitteiden asettelun ja itseluottamuksen vahvistamisen parissa.{" "}
          </p>
          <div className='flex flex-col justify-center md:justify-start items-center md:flex-row gap-4'>
            <Link
              href='/varaus'
              className='bg-theme min-w-64 md:min-w-0 text-center text-white px-6 py-3 rounded-lg font-medium transition-colorshover:bg-green-900'
            >
              Varaa Tapaaminen
            </Link>
            {additionalInfo && (
              <Link
                href='/lue-lisaa'
                className='border min-w-64 md:min-w-0 text-center border-theme text-theme px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors'
              >
                Lue Lisää
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
