var options = {
  series: [
    {
      name: "2020",
      data: [1126, 991, 1009, 1046, 1128, 985, 809, 712, 1045],
    },
    {
      name: "2019",
      data: [1081, 1099, 1073, 1063, 1058, 1037, 877, 921, 1070],
    },
    {
      name: "2018",
      data: [1024, 995, 982, 975, 926, 971, 980, 960, 917],
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
      "MENA",
      "TT2+",
      "YF",
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
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5,
    fontSize: "14px",
    fontFamily: "JetBrains Mono",
    fontWeight: 400,
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
