import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Chart.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ title, labels, datasets, position, size }) => {
  const data = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: position },
      title: { display: true, text: title },
    },
  };

  return (
    <div
      style={{ width: size.width, height: size.height }}
      className="chart-item"
    >
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
