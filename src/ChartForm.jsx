import React from "react";
import { FormField, FormSelect, FormSubmit } from "./util/FormComponents";

const ChartForm = () => {
  const chartTypes = {
    piechart: "Pie Chart",
    linechart: "Line Chart",
  };

  const handleSubmit = () => {};

  return (
    <div>
      <FormField type="text" title="title" />
      <FormSelect title="Chart" options={chartTypes} />
      <FormSubmit title="Create" handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChartForm;
