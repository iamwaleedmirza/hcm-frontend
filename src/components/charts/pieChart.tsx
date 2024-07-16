import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const PieChart = () => {
  const [series, setSeries] = useState<number[]>([60, 20, 20]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: "pie",
    },
    colors: ["#7152F3", "#f45b69", "#feb85b"],
    labels: ["On Time", "Late", "Absent"],
    legend: {
      position: "bottom",
      floating: false,
      fontSize: "14px",
      fontFamily: "Lexend",
      labels: {
        useSeriesColors: true,
      },
      markers: {
        radius: 0,
      },
      itemMargin: {
        vertical: 5,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div className="chart-container">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width="100%"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
