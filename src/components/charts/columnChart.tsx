import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const StackedColumnChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false, // Hide toolbar, which includes the download button
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
        stacking: "normal",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      labels: {
        style: {
          fontFamily: "'Lexend', sans-serif", // Custom font family
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: function (value) {
          return `${value}%`;
        },
        style: {
          fontFamily: "'Lexend', sans-serif", // Custom font family
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val}%`;
        },
      },
    },
    colors: ["#7152F3", "#f45b69", "#feb85b"],
    legend: {
      show: false, // Hide legends
    },
    grid: {
      show: false, // Remove grid lines
    },
  };

  const series = [
    {
      name: "On Time",
      data: [80, 70, 85, 65, 90],
    },
    {
      name: "Late",
      data: [10, 20, 10, 20, 5],
    },
    {
      name: "Absent",
      data: [10, 10, 5, 15, 5],
    },
  ];

  return (
    <div className="stacked-column-chart">
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default StackedColumnChart;
