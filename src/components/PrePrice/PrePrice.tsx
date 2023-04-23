const PrePrice = () => {
  return (
    <div className="flex items-center justify-around h-full">
      <div className="flex flex-col gap-6">
        <span className="font-semibold text-xs text-[#444]">Pre-market</span>
        <div className="flex text-xl font-bold">
          <span className="text-[#444]">$</span>
          <span>129.20</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <img src="bearish.svg" />
          <span className="text-[#B62C2C]">-0.89 (-0.72%)</span>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <span className="font-semibold text-xs text-[#444]">
          Previous Close
        </span>
        <div className="flex text-xl font-bold">
          <span className="text-[#444]">$</span>
          <span>126.25</span>
        </div>
        <div className="text-xs font-semibold text-[#444]">June 14, 4:00pm</div>
      </div>
      <div className="flex flex-col gap-6">
        <span className="font-semibold text-xs text-[#444]">Open</span>
        <div className="flex text-xl font-bold">
          <span className="text-[#444]">$</span>
          <span>129.22</span>
        </div>
        <div className="text-xs font-semibold text-[#444]">June 15, 9:30pm</div>
      </div>
    </div>
  );
};

export default PrePrice;
