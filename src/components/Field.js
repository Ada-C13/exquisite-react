import React from 'react';
import './Field.css';
import PropTypes from 'prop-types';

const Field = ({id, placeholder, value, onChangeCallback}) => {
  return (
    <input className={`PlayerSubmissionForm__input${value.length > 0 ? "" : "--invalid"}`}
      id={id}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChangeCallback} />
  );
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeCallback: PropTypes.func.isRequired,
};

export default Field;