import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = props => {
  // Handles players submission of poetry
  // Hands Data back to Game
  // Props:
  // Placeholder text
  // Turn Number
  // callback

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={props.handleSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <input
            placeholder={props.placeholderText}
            turnNumber={props.turnNumber}
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
