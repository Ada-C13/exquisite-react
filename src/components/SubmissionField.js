import React from "react";
import PropTypes from 'prop-types';

const SubmissionField = (props) => {
  return <input 
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
      type="text" 
      value={props.value}
      onChange={props.onChangeHandler}
    />
}

SubmissionField.propTypes = {
  className: PropTypes.oneOf([
    "PlayerSubmissionFormt__input--invalid", 
    null
  ]),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default SubmissionField