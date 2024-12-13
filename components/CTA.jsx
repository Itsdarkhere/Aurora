import Link from "next/link";

export default function CTA() {
  return (
    <div className=' w-full bg-slate-50 md:py-80 md:px-4 flex justify-center items-center'>
      <div className='flex flex-row justify-center gap-8 max-w-7xl w-full'>
      <div className=' w-96 h-96 rounded-xl bg-green-950'></div>
        <div className=' flex flex-col justify-center items-start'>
          <h3 className=' text-4xl font-bold text-green-950 mb-4'>
            Kehitä itseäsi ammattilaisena
          </h3>
          <p className=' leading-6 text-lg max-w-2xl text-green-900  mb-12'>
            Psyykkinen valmennuksen avulla voit saada apua monenlaisiin
            haasteisiin ja voimme työskennellä tapaamisilla muun muassa stressin
            hallinnan ja paineensiedon, vireystilan säätelyn, motivaation,
            tavoitteiden asettelun ja itseluottamuksen vahvistamisen parissa.{" "}
          </p>
          <div className='flex flex-col justify-center md:justify-start items-center md:flex-row gap-4'>
            <Link
              href='/varaus'
              className='bg-green-800 min-w-64 md:min-w-0 text-center text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors'
            >
              Varaa Tapaaminen
            </Link>
            <Link
              href='/lue-lisaa'
              className='border min-w-64 md:min-w-0 text-center border-green-800 text-green-800 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors'
            >
              Lue Lisää
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
