import React, { useState } from 'react';
import './Field.css';

const Field = (props) => {
  return (
    <input className="field"
            placeholder={props.placeholder}
            type="text"
            value={props.value}
            onChange={props.onChangeCallback} />
  );
}

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.value,
  onChangeCallback: PropTypes.func.isRequired,
};

export default Field;