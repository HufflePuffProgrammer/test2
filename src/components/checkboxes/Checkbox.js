import React from "react";
import PropTypes from "prop-types";

function Checkbox({ genre_id, label, isSelected, onCheckboxChange }) {
  return (
    <React.Fragment>
      <div class="form-check">
        <label for={label} class="form-check-label">
          <input
            type="checkbox"
            id={genre_id}
            key={genre_id}
            onChange={onCheckboxChange}
            isSelected={isSelected}
            className="form-check-input"
          />
          {label}
        </label>
      </div>
    </React.Fragment>
  );
}
Checkbox.propTypes = {
  isSelected: PropTypes.bool.isRequired
};
Checkbox.defaultProps = {
  isSelected: false
};
export default Checkbox;
