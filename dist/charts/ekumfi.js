var options = {
  series: [
    {
      //target_pop:2510
      name: "2020",
      type: "column",
      data: [103.8, 94.7, 96.0, 100.4, 107.4, 95.8, 97.9, 79.0, 90.8],
    },
    {
      //target_pop: 2468
      name: "2019",
      type: "column",
      data: [92.8, 97.3, 97.0, 96.0, 96.5, 93.8, 93.8, 82.2, 103.2],
    },
    {
      //target_pop: 2434
      name: "2018",
      type: "column",
      data: [81.7, 88.5, 88.5, 89.0, 87.2, 83.1, 80.4, 81.3, 84.5],
    },
    // {
    //   name: "Trend in 2020",
    //   type: "line",
    //   data: [103.8, 94.7, 96.0, 100.4, 107.4, 95.8, 97.9, 79.0, 90.8],
    // },
  ],
  chart: {
    height: 500,
    background: "#fff",
    type: "line",
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },

  colors: ["#4d375d", "#ec4646", "#ad6c80"],
  dataLabels: {
    enabled: true,
    enabledOnSeries: [3],
  },
  stroke: {
    width: [0, 0, 0, 4],
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
    labels: {
      style: {
        fontSize: "18px",
        fontWeight: 700,
        fontFamily: "JetBrains Mono",
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
        fontFamily: "JetBrains Mono",
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
    theme: "dark",
  },
};

var chart = new ApexCharts(document.querySelector("#ekumfi"), options);
chart.render();
