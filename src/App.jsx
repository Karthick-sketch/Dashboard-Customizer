import PieChart from "./charts/PieChart";
import LineChart from "./charts/LineChart";
import "./App.css";

function App() {
  const chartsData = [
    {
      type: "Pie Chart",
      title: "Vote Distribution",
      labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
      datasets: [
        {
          label: "Votes",
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          borderColor: ["#fff"],
          borderWidth: 1,
        },
      ],
      position: "top",
      size: {
        width: "450px",
        height: "300px",
      },
    },
    {
      type: "Line Chart",
      title: "Monthly Sales",
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Sales",
          data: [30, 45, 60, 40, 70],
          borderColor: "blue",
          backgroundColor: ["rgba(0, 0, 255, 0.2)"],
        },
      ],
      position: "top",
      size: {
        width: "450px",
        height: "300px",
      },
    },
    {
      type: "Line Chart",
      title: "Monthly Revenue",
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Sales",
          data: [30, 40, 45, 60, 70],
          borderColor: "green",
          backgroundColor: ["rgba(0, 0, 255, 0.2)"],
        },
      ],
      position: "top",
      size: {
        width: "450px",
        height: "300px",
      },
    },
  ];

  const charts = chartsData.map((chart, i) => {
    if (chart.type === "Pie Chart") {
      return (
        <PieChart
          key={i}
          title={chart.title}
          labels={chart.labels}
          datasets={chart.datasets}
          position={chart.position}
          size={chart.size}
        />
      );
    } else if (chart.type === "Line Chart") {
      return (
        <LineChart
          key={i}
          title={chart.title}
          labels={chart.labels}
          datasets={chart.datasets}
          position={chart.position}
          size={chart.size}
        />
      );
    }
  });

  return <div style={{ display: "flex" }}>{charts}</div>;
}

export default App;
