var options = {
  series: [
    {
      name: "2020",
      type: "column",
      data: [15, 9, 6],
    },
    {
      name: "2019",
      type: "column",
      data: [17, 11, 6],
    },
    {
      name: "2018",
      type: "column",
      data: [18, 13, 5],
    },
  ],
  chart: {
    height: 500,
    background: "#fff",
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: "center",
      },
    },
  },

  colors: ["#4d375d", "#ec4646", "#ad6c80"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [0, 0, 0, 4],
  },
  title: {
    text: "TB Notification Rate from 2018-2020",
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
    categories: ["Cases Notified", "Smear Positive", "Smear Negative"],
    title: {
      text: "TB Classifications",
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
    max: 19,
    title: {
      text: "Case Count",
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
    theme: "dark",
  },
};

var chart = new ApexCharts(document.querySelector("#tb"), options);
chart.render();
