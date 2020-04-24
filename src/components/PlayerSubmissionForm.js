import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = props => {


  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(value);
    setValue('')
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.turnNumber + 1}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={handleSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          <input
            placeholder={props.placeholderText}
            value={value}
            onChange={e => setValue(e.target.value)}
            type="text" />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
