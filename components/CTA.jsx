import Link from "next/link";

export default function CTA() {
  return (
    <div className=' w-full bg-slate-50 md:py-12 md:px-4 flex justify-center items-center'>
      <div className=' bg-green-800 text-center md:rounded-2xl py-12 px-12 max-w-7xl w-full h-full flex flex-col justify-center items-center'>
        <h3 className=' text-4xl font-bold text-white mb-4'>
          Kehitä itseäsi ammattilaisena
        </h3>
        <p className=' leading-6 text-lg max-w-3xl text-gray-300  mb-12'>
          Psyykkinen valmennuksen avulla voit saada apua monenlaisiin
          haasteisiin ja voimme työskennellä tapaamisilla muun muassa stressin
          hallinnan ja paineensiedon, vireystilan säätelyn, motivaation,
          tavoitteiden asettelun ja itseluottamuksen vahvistamisen parissa.{" "}
        </p>
        <Link href='/' className=' bg-slate-50 rounded-md text-gray-800 px-6 py-2'>
          Varaa tapaaminen
        </Link>
      </div>
    </div>
  );
}
