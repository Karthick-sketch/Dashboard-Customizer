import React from "react";
import "./FormComponents.css";

const FormField = ({ type, title }) => {
  return (
    <div className="form-section">
      <p className="form-input-label">{title}:</p>
      <input type={type} id={title} className="form-input" />
    </div>
  );
};

const FormSelect = ({ options, title }) => {
  const optionList = [];
  let i = 1;
  for (let key in options) {
    optionList.push(
      <option key={i++} value={options[key].value}>
        {options[key].label}
      </option>
    );
  }

  return (
    <div className="form-section">
      <p className="form-input-label">{title}:</p>
      <select id={title} className="form-select">
        {optionList}
      </select>
    </div>
  );
};

const FormSubmit = ({ title, handleSubmit }) => {
  return (
    <button className="form-submit" onClick={handleSubmit}>
      {title}
    </button>
  );
};

const FormCancel = ({ title, handleCancel }) => {
  return (
    <button className="form-cancel" onClick={handleCancel}>
      {title}
    </button>
  );
};

const FormButtons = ({ title, handleSubmit, handleCancel }) => {
  return (
    <div className="form-buttons-container">
      <FormCancel title="Cancel" handleCancel={handleCancel} />
      <FormSubmit title={title} handleSubmit={handleSubmit} />
    </div>
  );
};

export { FormField, FormSelect, FormSubmit, FormCancel, FormButtons };
