import { DETAIL_BOARD_INFO } from "../../data/hardcodes";

function DetailBoard() {
  return (
    <div>
      <label className="block mb-4 text-xl font-semibold">Details</label>
      <ul className="flex flex-col gap-3 text-xs font-semibold ">
        {DETAIL_BOARD_INFO.map((item) => (
          <div className="flex justify-between">
            <span className="text-[#777]">{Object.keys(item)[0]}</span>
            <span>{Object.values(item)[0]}</span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DetailBoard;
