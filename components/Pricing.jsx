export default function Pricing() {
  return (
    <div className=' w-full bg-[#EDEEED] py-36 md:py-56 px-6 flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-12 max-w-7xl w-full'>
        <div className='flex flex-col gap-4 justify-center items-center text-center'>
          <h4 className=' text-theme font-bold text-4xl md:text-5xl'>
            Hinnasto
          </h4>
          <p className=' text-[#4C676D] text-lg md:text-xl'>
            Hyödynnä alennus suuremmista ostoksista!
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-full'>
          <PriceTwo textOne={"1x Valmennus"} textTwo={"€90"} badgeText={""} />
          <PriceTwo
            textOne={"3x Valmennus"}
            textTwo={"€265"}
            badgeText={"Säästä 5€"}
          />
          <PriceTwo
            textOne={"5x Valmennus"}
            textTwo={"€440"}
            badgeText={"Säästä 10€"}
          />
        </div>
      </div>
    </div>
  );
}

function Price({ textOne, textTwo, badgeText }) {
  return (
    <div className='flex flex-col w-full md:max-w-80 justify-start gap-2 items-center bg-theme rounded-2xl py-8 px-6'>
      <p className=' text-[#DDEAE6] text-2xl'>{textOne}</p>
      <div className='flex flex-row gap-2 items-center'>
        <h6 className=' text-white font-bold text-5xl'>{textTwo}</h6>
        {badgeText && (
          <div className=' bg-[#63B599] text-white rounded-2xl px-4 text-xl font-bold'>
            {badgeText}
          </div>
        )}
      </div>
    </div>
  );
}

function PriceTwo({ textOne, textTwo, badgeText }) {
  return (
    <div className='flex flex-row w-full bg-[#628C7E] md:max-w-[886px] justify-between items-center px-6 md:px-12 py-8 rounded-xl'>
      <div>
        <p className=' text-[#F2F2F2] font-semibold text-2xl md:text-3xl'>{textOne}</p>
        {badgeText && <p className=" text-[#D5E2DD] font-medium">{badgeText}</p>}
      </div>
      <h6 className=' text-white font-bold text-[32px] md:text-5xl'>{textTwo}</h6>
    </div>
  );
}
