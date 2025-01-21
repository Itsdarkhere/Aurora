import Image from "next/image";
import american_football from "../public/football.jpg";
import something from "../public/balance.png";
import somethingtwo from "../public/goals.png";

export default function Themes() {
  return (
    <div className='bg-[#F8F8F8] w-full py-32 px-6 flex justify-center items-center '>
      <div className=' w-full max-w-7xl flex gap-12 flex-col items-center'>
        <h4 className=' text-theme font-bold text-center text-3xl'>Valmennuksen teemat</h4>
        <div className='w-full flex flex-wrap lg:flex-row justify-center gap-6 items-center'>
          <Theme
            title={"Suorituskyvyn kehittäminen"}
            paragraph={
              "Paineensietokyky, keskittyminen, motivaatio ja itseluottamus kilpailutilanteissa."
            }
            img={american_football}
          />
          <Theme
            title={"Mielen tasapaino"}
            paragraph={
              "Stressinhallinta, palautuminen ja kokonaisvaltainen hyvinvointi."
            }
            img={something}
          />
          <Theme
            title={"Tavoitteiden saavuttaminen"}
            paragraph={
              "Menestyksen esteiden tunnistaminen ja konkreettiset työkalut etenemiseen."
            }
            img={somethingtwo}
          />
        </div>
      </div>
    </div>
  );
}

function Theme({ title, paragraph, img }) {
  return (
    <div className='flex flex-col relative overflow-hidden shadow-md rounded-xl flex-1 min-w-[335px] max-w-[435px]'>
      <div className="w-full relative h-48">
        <Image
          src={img}
          fill
          alt='Mies heittää amerikkalaista jalkapalloa'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='flex flex-col gap-4 text-center p-6 w-full bg-white items-center'>
        <h6 className=" text-[#4C7A6A] text-xl font-semibold">{title}</h6>
        <p className=" text-neutral-600 text-base">{paragraph}</p>
      </div>
    </div>
  );
}
