import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const DonutChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["On Time", "Late", "Absent"],
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
    colors: ["#7152F3", "#f45b69", "#feb85b"], // Custom colors
    legend: {
      show: false, // Hide legends
    },
  };

  const series: number[] = [60, 20, 20]; // Data values

  return (
    <div className="donut-chart">
      <Chart options={options} series={series} type="donut" width="100%" />
    </div>
  );
};

export default DonutChart;
