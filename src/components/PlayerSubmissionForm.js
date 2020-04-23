import React from 'react';
import './PlayerSubmissionForm.css';
import Field from './Field.js';
import PropTypes from 'prop-types';

const generateSubmissionFields = (fields, current, onChangeCallback) => {
  const submissionFields = fields.map((field, index) => field.key ? <Field
    key={field.key}
    id={field.key} //explicit prop for storing keys since Field component can't pass back key prop
    placeholder={field.placeholder}
    value={current[field.key]}
    onChangeCallback={onChangeCallback}  /> : <span key={index}>{field}</span> );

  return submissionFields;
}

const PlayerSubmissionForm = ({ fields, current, count, onChangeCallback, onSubmitCallback}) => {
  console.log(fields);
  const submissionFields = generateSubmissionFields(fields, current, onChangeCallback);

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{count}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitCallback} >

        <div className="PlayerSubmissionForm__poem-inputs">
          {submissionFields}
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  fields: PropTypes.array.isRequired,
  current: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
};



export default PlayerSubmissionForm;


