import Scheduling from "../components/Scheduling";

export const meta = () => {
  return [
    { title: "Varaa tapaaminen - Psykologiaurora.fi" },
    { name: "description", content: "Varaa psyykkisen valmennuksen tapaaminen Aurora Huovisen kanssa." },
  ];
};

export default function Varaus() {
  return (
    <div className="w-full min-h-screen bg-lightbg md:bg-gradient-to-r to-[#75A896] from-[#53786B] flex flex-col justify-start items-center">
      <Scheduling />
    </div>
  );
}
