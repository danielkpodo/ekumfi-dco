var options = {
  series: [
    {
      //target_pop:2510
      name: "2020",
      data: [-2.3, 2.5, 5.2],
    },
    {
      name: "2019",
      data: [-0.4, -0.8, 1.4],
    },
    {
      name: "2018",
      data: [3.5, -3.3, 1.6],
    },
  ],
  chart: {
    height: 500,
    background: "#fff",
    type: "bar",
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: "top",
      },
    },
  },

  colors: ["#314e52", "#f2a154", "#350b40"],
  dataLabels: {
    enabled: true,
  },

  title: {
    text: "Dropout Rate for Ekumfi District From 2018-2020",
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
    categories: ["PENTA1/PENTA3", "BCG/MR", "MR1/MR2"],
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
    position: "top",
    fontSize: "14px",
    fontFamily: "JetBrains Mono",
    fontWeight: 400,
    onItemClick: {
      toggleDataSeries: true,
    },
  },
  tooltip: {
    enabled: true,
  },
};

var chart = new ApexCharts(document.querySelector("#dropout"), options);
chart.render();
