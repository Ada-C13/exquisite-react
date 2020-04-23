import React, { useState } from 'react';
import './Field.css';
import PropTypes from 'prop-types';

const Field = (props) => {
  return (
    <input className={`PlayerSubmissionForm__input${props.value.length > 0 ? "" : "--invalid"}`}
            id={props.id}
            placeholder={props.placeholder}
            type="text"
            value={props.value}
            onChange={props.onChangeCallback} />
  );
}

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeCallback: PropTypes.func.isRequired,
};

export default Field;