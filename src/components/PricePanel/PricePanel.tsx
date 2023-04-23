const PricePanel = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4">
        <span title="symbol" className="font-bold text-[#444]">
          AAPL
        </span>
        <div className="flex items-center text-4xl font-bold">
          <span className="text-[#444]">$</span>
          <span>136.36</span>
        </div>
        <div className="flex items-center text-xs">
          <img src="bullish.svg" alt="bullish" className="mr-2" />
          <span className="text-[#2CB631]">+0.49 (+0.37%)</span>
        </div>
      </div>
      <img src="small-chart.svg" className="" />
    </div>
  );
};

export default PricePanel;
