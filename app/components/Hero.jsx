const Hero = () => {
  return (
    <div className="relative bg-black w-full py-60 p-4 flex justify-center items-center">
      <div className="flex flex-col z-10 md:pb-12 justify-center items-center h-full w-full">
        <h1 className="text-center text-5xl lg:text-6xl font-bold text-white mb-6">
          Psyykkinen Valmennus
        </h1>

        <p className="text-xl text-center md:text-xl text-white/90 mb-12 max-w-2xl">
          Aurora Huovinen | Psykologi (PsM), Psyykkinen valmentaja
        </p>
      </div>
      {/* Desktop background */}
      <img
        src="/herobg.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Calm misty forest"
      />
    </div>
  );
};

export default Hero;
