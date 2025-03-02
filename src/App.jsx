import { useState } from "react";
import "./App.css";
import Widget from "./widget/Widget";
import WidgetForm from "./form/WidgetForm";

function App() {
  const [charts, setCharts] = useState([]);

  const headers = [
    {
      label: "Votes",
      value: 1,
    },
    {
      label: "Sales",
      value: 2,
    },
  ];

  const chartTypes = [
    {
      label: "Pie-Chart",
      value: "piechart",
    },
    {
      label: "Line-Chart",
      value: "linechart",
    },
  ];

  const handleSubmit = () => {
    let cred = {
      title: document.getElementById("Title").value,
      head: document.getElementById("Select field").value,
      chartType: document.getElementById("Chart").value,
    };
    if (cred.title && cred.head && cred.chartType) {
      setCharts([...charts, cred]);
    }
  };

  return (
    <div>
      <WidgetForm
        headers={headers}
        chartTypes={chartTypes}
        handleSubmit={handleSubmit}
      />
      <Widget charts={charts} />
    </div>
  );
}

export default App;
