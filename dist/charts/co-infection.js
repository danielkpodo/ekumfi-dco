var options = {
  series: [
    {
      data: [15, 3],
      name: "2020",
    },
    {
      data: [17, 4],
      name: "2019",
    },
    {
      data: [15, 3],
      name: "2018",
    },
  ],
  chart: {
    type: "bar",
    height: 450,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  colors: ["#b34180", "#91091e", "#5b5b5b"],
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "12px",
      colors: ["#fff"],
    },
  },
  title: {
    text: "TB Co-infection from 2018-2020 in Ekumfi District",
    align: "center",
    margin: 10,
    style: {
      fontSize: "24px",
      fontWeight: "800",
      fontFamily: "JetBrains Mono",
      color: "#000",
    },
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  xaxis: {
    labels: {
      style: {
        fontSize: "18px",
        fontWeight: 700,
      },
    },
    categories: ["TB Cases", "HIV+"],
    title: {
      text: "Cases Count",
      style: {
        color: "#000",
        fontSize: "16px",
        fontFamily: "JetBrains Mono",
        fontWeight: 600,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: "18px",
        fontWeight: 700,
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

var chart = new ApexCharts(document.querySelector("#infection"), options);
chart.render();
