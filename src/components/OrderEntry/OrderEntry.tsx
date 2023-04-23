const OrderEntry = () => {
  return (
    <div className="flex items-center justify-center h-full gap-5 capitalize">
      <div className="flex flex-col gap-2 text-sm font-semibold text-center">
        <label className=" text-[#555]">buying</label>
        <span title="price" className="text-xl ">
          144,85
        </span>
        <button className="rounded-[5px] bg-[#0D8E39] text-white w-28 py-1.5">
          Buy
        </button>
      </div>
      <div className="flex flex-col gap-2 text-sm font-semibold text-center">
        <label className=" text-[#555]">selling</label>
        <span title="price" className="text-xl">
          144,93
        </span>
        <button className="rounded-[5px] bg-[#B62C2C] text-white w-28 py-1.5">
          Sell
        </button>
      </div>
    </div>
  );
};

export default OrderEntry;
