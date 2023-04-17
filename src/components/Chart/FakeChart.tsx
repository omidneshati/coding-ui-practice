import ReactApexChart from "react-apexcharts";
import { CHART_OPTIONS, CHART_SERIES } from "../../data/hardcodes";

export default function ApexChart() {
  return (
    <div id="chart">
      <ReactApexChart
        options={CHART_OPTIONS}
        series={CHART_SERIES}
        type="candlestick"
        height={350}
      />
    </div>
  );
}
