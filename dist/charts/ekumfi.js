var options = {
  series: [
    {
      //target_pop:582
      name: "2020",
      data: [103.8, 94.7, 96.0, 100.4, 107.4, 95.8, 97.9, 79.0, 90.8],
    },
    {
      //target_pop:573
      name: "2019",
      data: [92.8, 97.3, 97.0, 96.0, 96.5, 93.8, 93.8, 82.2, 103.2],
    },
    {
      //target_pop: 555
      name: "2018",
      data: [81.7, 88.5, 88.5, 89.0, 87.2, 83.1, 80.4, 81.3, 84.5],
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
  colors: ["#fb743e", "#00af91", "#ec4646"],
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
    text: "EPI Coverage for Ekumfi From 2018-2020",
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

var chart = new ApexCharts(document.querySelector("#otuam"), options);
chart.render();
