import React from "react";
import "./FormComponents.css";

const FormField = ({ type, title }) => {
  return (
    <div className="Form-section">
      <p className="FormInput-label">{title}:</p>
      <input type={type} id={title} className="Form-input" />
    </div>
  );
};

const FormSelect = ({ title, options }) => {
  const optionList = [];
  let i = 1;
  for (let key in options) {
    optionList.push(
      <option key={i++} value={key}>
        {options[key]}
      </option>
    );
  }

  return (
    <div className="Form-section">
      <p className="FormInput-label">{title}:</p>
      <select id={title}>{optionList}</select>
    </div>
  );
};

const FormSubmit = ({ title, handleSubmit }) => {
  return (
    <div className="Form-section">
      <button className="Form-submit" onClick={handleSubmit}>
        {title}
      </button>
    </div>
  );
};

export { FormField, FormSelect, FormSubmit };
