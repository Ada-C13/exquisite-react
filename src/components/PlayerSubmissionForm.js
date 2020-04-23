import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import Field from './Field.js';

const generateSubmissionFields = (fields, onChangeCallback) => {

  const submissionFields = fields.map(field => field.key ? <Field
    placeholder={field.placeholder}
    value={field.value}
    onChangeCallback={field.onChangeCallback}  /> : <span>{field}</span> )

  return submissionFields;
}

const PlayerSubmissionForm = ({ fields, onChangeCallback}) => {
  console.log(fields);
  const submissionFields = generateSubmissionFields(fields, onChangeCallback);

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

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



export default PlayerSubmissionForm;


