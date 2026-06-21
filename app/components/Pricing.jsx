export default function Pricing() {
  return (
    <div className="w-full bg-[#EDEEED] py-36 md:py-56 px-6 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-12 max-w-7xl w-full">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h4 className="text-theme font-bold text-4xl md:text-5xl">
            Hinnasto
          </h4>
          <p className="text-[#4C676D] max-w-lg text-lg">
            Ensimmäisellä tapaamisella kartoitetaan sinulle sopiva paketti ja laskutus tapaamisen jälkeen!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <PriceTwo textOne={"45 min Valmennus"} textTwo={"€90"} badgeText={""} />
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

function PriceTwo({ textOne, textTwo, badgeText }) {
  return (
    <div className="flex flex-row w-full shadow-xl bg-[#628C7E] md:max-w-[886px] justify-between items-center px-6 md:px-12 py-8 rounded-xl">
      <div>
        <div className="flex flex-col gap-1">
          <p className="text-[#F2F2F2] font-semibold text-2xl md:text-3xl">{textOne}</p>
          {badgeText && <p className="text-[#D5E2DD] text-sm md:text-base">45 min / kerta</p>}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h6 className="text-white font-bold text-[32px] md:text-5xl">{textTwo}</h6>
        {badgeText && <p className="text-[#D5E2DD] font-medium">{badgeText}</p>}
      </div>
    </div>
  );
}
