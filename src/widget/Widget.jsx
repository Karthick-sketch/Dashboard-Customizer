import PieChart from "../charts/PieChart";
import LineChart from "../charts/LineChart";
import "./Widget.css";

function Widget({ charts }) {
  const pieChartData = {
    label: "Votes",
    data: [12, 19, 3, 5, 2],
  };

  const lineChartData = {
    label: "Sales",
    data: [30, 40, 45, 60, 70],
  };

  const chartsData = charts.map((chart) => {
    if (chart.chartType === "piechart") {
      return {
        type: chart.chartType,
        title: chart.title,
        labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
        datasets: [
          {
            label: pieChartData.label,
            data: pieChartData.data,
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
      };
    } else if (chart.chartType === "linechart") {
      return {
        type: chart.chartType,
        title: chart.title,
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: lineChartData.label,
            data: lineChartData.data,
            borderColor: "green",
            backgroundColor: ["rgba(0, 0, 255, 0.2)"],
          },
        ],
        position: "top",
        size: {
          width: "450px",
          height: "300px",
        },
      };
    }
  });

  return (
    <div className="widget-container">
      {chartsData.map((chart, i) => {
        if (chart.type === "piechart") {
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
        } else if (chart.type === "linechart") {
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
      })}
    </div>
  );
}

export default Widget;
