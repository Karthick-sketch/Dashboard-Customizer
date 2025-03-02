import React, { useState } from "react";
import { FormField, FormSelect, FormButtons } from "../util/FormComponents";
import "./WidgetForm.css";

function WidgetForm({ headers, chartTypes, handleSubmit }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button className="add-widget" onClick={handleOpen}>
        Add Widget
      </button>

      {isOpen && (
        <div className="overlay-style">
          <div className="popup-style">
            <h2>New Widget</h2>
            <div>
              <FormField type="text" title="Title" />
              <FormSelect options={headers} title="Select field" />
              <FormSelect options={chartTypes} title="Chart" />
              <FormButtons
                title="Add"
                handleSubmit={() => {
                  handleSubmit();
                  handleClose();
                }}
                handleCancel={handleClose}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WidgetForm;
