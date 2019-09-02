import React from "react";

function Checkbox({ genre_id, label, isSelected, onCheckboxChange }) {
  return (
    <React.Fragment>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            key={genre_id}
            name={label}
            value={genre_id}
            onChange={onCheckboxChange}
            checked={isSelected}
            className="form-check-input"
          />
          {label}
        </label>
      </div>
    </React.Fragment>
  );
}

export default Checkbox;
