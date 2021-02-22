var options = {
  series: [
    {
      name: "2020",
      data: [118.2, 104.9, 106.3, 111.2, 118.7, 114.4, 104.8, 81.4, 71.1],
    },
    {
      name: "2019",
      data: [86.4, 96.6, 99.4, 96.0, 99.9, 97.5, 95.0, 92.5, 102.2],
    },
    {
      name: "2018",
      data: [75.5, 95.6, 95.8, 96.0, 95.8, 80.2, 73.7, 71.8, 60.2],
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
    },
  },
  colors: ["#ff5e78", "#822659", "#845ec2"],
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
    text: "EPI TREND IN NARKWA FROM 2018-2020",
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
    labels: {
      style: {
        fontSize: "18px",
        fontWeight: 700,
      },
    },
    categories: [
      "BCG",
      "OPV1",
      "OPV3",
      "ROTA2",
      "PENTA3",
      "MR2",
      "YF",
      "MENA",
      "TD2+",
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

      style: {
        fontSize: "18px",
        fontWeight: 700,
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

var chart = new ApexCharts(document.querySelector("#nark"), options);
chart.render();
