const Start = () => {
  return (
    <div className="relative" id="start">
      <img
        src="./data/bc.png"
        alt="Not found"
        className="font-bold text-black text-[32px] w-full md:h-[90vh] lg:h-[90vh] h-[60vh] opacity-90"
      />
      <div className="absolute bottom-0 left-0 right-0 pb-32 md:pb-48 items-center justify-center">
        <p className="text-black text-4xl md:text-6xl font-semibold text-center">
          Each satin petal, a touch of devotion.
        </p>
        <p className="text-2xl md:text-4xl lg:text-4xl ">Delicately Handmade</p>
      </div>
    </div>
  );
};
export default Start;
