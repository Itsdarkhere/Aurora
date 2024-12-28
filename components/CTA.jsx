import Link from "next/link";

export default function CTA({ additionalInfo }) {
  return (
    <div className=' w-full bg-theme py-36 px-4 flex justify-center items-center'>
      <div className='flex flex-col md:flex-row justify-between gap-20 max-w-7xl w-full'>
        <div className='flex flex-col'>
          <h3 className=' text-4xl md:text-5xl font-bold text-white mb-4'>
            Kehitä itseäsi ammattilaisena
          </h3>
          <p className=' leading-6 text-lg max-w-3xl text-[#E8F1EE]'>
            Psyykkinen valmennuksen avulla voit saada apua monenlaisiin
            haasteisiin ja voimme työskennellä tapaamisilla muun muassa stressin
            hallinnan ja paineensiedon, vireystilan säätelyn, motivaation,
            tavoitteiden asettelun ja itseluottamuksen vahvistamisen parissa.{" "}
          </p>
        </div>
        <div className='flex flex-col justify-center items-start md:items-center gap-4'>
          <Link
            href='/varaus'
            className='bg-white min-w-64 text-center text-theme text-lg px-6 py-3 rounded-lg font-semibold'
          >
            Varaa Tapaaminen
          </Link>
          {additionalInfo && (
            <Link
              href='/lue-lisaa'
              className='border min-w-64 text-center border-white text-lg text-white px-6 py-3 rounded-lg font-semibold'
            >
              Lue Lisää
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
