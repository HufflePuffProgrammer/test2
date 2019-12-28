import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function TextEditInputGroup({
  label,
  name,
  value,
  placeHolder,
  type,
  onChange,
  error
}) {
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  return (
    <div className="form-group">
      <label htmlFor="label"> {label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

TextEditInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};
TextEditInputGroup.defaultProps = {
  type: "text"
};
export default TextEditInputGroup;
