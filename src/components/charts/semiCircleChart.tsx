import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SemiCircleChart = () => {
  const [series] = useState([80]);
  const [options] = useState({
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#E6E2F8",
          strokeWidth: "70%",
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
          borderRadius: 10,
          colors: ["#FF5733"],
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            formatter: function (val) {
              return `16 out of 20`;
            },
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
      colors: ["#7152F3"],
    },
    labels: ["Average Results"],
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default SemiCircleChart;
