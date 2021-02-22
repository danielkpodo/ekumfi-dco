var options = {
  series: [
    {
      //target_pop:582
      name: "2020",
      data: [88.8, 91.4, 92.1, 97.9, 103.3, 87.8, 91.6, 81.1, 103.3],
    },
    {
      //target_pop:573
      name: "2019",
      data: [90.2, 92.1, 91.4, 93.7, 91.4, 86.9, 84.3, 71.6, 140.8],
    },
    {
      //target_pop: 555
      name: "2018",
      data: [68.1, 76.8, 76.9, 80.4, 81.4, 77.3, 84.3, 79.6, 113.0],
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
    text: "EPI TREND IN Otuam FROM 2018-2020",
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

var chart = new ApexCharts(document.querySelector("#otuam"), options);
chart.render();
