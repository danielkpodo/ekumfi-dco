var options = {
  series: [
    {
      name: "2020",
      data: [101.2, 89.0, 90.7, 93.4, 101.3, 89.9, 96.2, 76.0, 82.7],
    },
    {
      name: "2019",
      data: [98.7, 100.4, 98.0, 97.1, 96.6, 94.7, 97.7, 80.1, 84.1],
    },
    {
      name: "2018",
      data: [96.3, 93.6, 92.4, 91.7, 87.1, 91.3, 86.3, 92.2, 90.3],
    },
  ],
  chart: {
    height: 500,
    background: "#fff",
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: true,
      background: "red",
    },
  },

  dataLabels: {
    enabled: true,
    formatter: function (value) {
      return value + "%";
    },
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "EPI TREND IN ESSUEYHIA FROM 2018-2020",
    align: "center",
    margin: 10,
    style: {
      fontSize: "24px",
      fontWeight: "800",
      fontFamily: "JetBrains Mono",
      color: "#000",
    },
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.3,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: [
      "BCG",
      "OPV1",
      "OPV3",
      "ROTA2",
      "PENTA3",
      "MR2",
      "YF",
      "MENA",
      "TT2+",
    ],
    title: {
      text: "Antigens",
      style: {
        color: "#000",
        fontSize: "16px",
        fontFamily: "JetBrains Mono",
        fontWeight: 600,
      },
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "#78909C",
      height: 6,
      offsetX: 0,
      offsetY: 0,
    },
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "%";
      },
    },
    title: {
      text: "Number of Children Vaccinated",
      style: {
        color: "#000",
        fontSize: "16px",
        fontFamily: "JetBrains Mono",
        fontWeight: 600,
      },
    },
  },
  legend: {
    position: "bottom",
    fontSize: "14px",
    fontFamily: "JetBrains Mono",
    fontWeight: 400,
    onItemClick: {
      toggleDataSeries: true,
    },
  },
  tooltip: {
    enabled: true,
    enabledOnSeries: undefined,
    shared: true,
    followCursor: false,
    intersect: false,
    inverseOrder: false,
    custom: undefined,
    fillSeriesColor: false,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      highlightDataSeries: false,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#esoshia"), options);
chart.render();
