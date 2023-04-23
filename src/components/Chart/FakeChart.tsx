import ReactApexChart from "react-apexcharts";
import { CHART_OPTIONS, CHART_SERIES, TIME_FRAMES } from "../../data/hardcodes";

import { FiCamera } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { CiSliderVertical } from "react-icons/ci";

export default function ApexChart() {
  return (
    <div id="chart">
      <div className="flex justify-between mb-5">
        <button className="shadow-[0px_0px_3px_0px_#00000094;] rounded-[8px] px-3 py-1 gap-1 flex justify-center items-center">
          <CiSliderVertical className="text-[#777] text-xl" />
          <span className="font-semibold">Tools</span>
        </button>
        <ul className="flex gap-2 bg-[#F2F3F7] items-center px-2 py-2 text-[#7C7F8C] font-semibold rounded-[7px]">
          {TIME_FRAMES.map((item, index) => (
            <a
              href="#"
              className={`${
                index === 0
                  ? "shadow-[0px_0px_4px_0px_#00000040] rounded-[5px] bg-white"
                  : ""
              } py-1 px-4`}
            >
              {item}
            </a>
          ))}
        </ul>
        <div className="shadow-[0px_0px_3px_0px_#00000094;] text-[#666] text-xl rounded-[8px] px-3 py-1 gap-4 flex justify-center items-center">
          <button className="p-1">
            <FiCamera />
          </button>
          <button className="p-1">
            <img src="frame.svg" />
          </button>
          <button className="p-1">
            <AiOutlineSetting />
          </button>
        </div>
      </div>
      <ReactApexChart
        options={CHART_OPTIONS}
        series={CHART_SERIES}
        type="candlestick"
        height={400}
      />
    </div>
  );
}
