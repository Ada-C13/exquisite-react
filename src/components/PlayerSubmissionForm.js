import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input name="adjectiveOne" type="text" placeholder="adjective" />
          <input name="nounOne" type="text" placeholder="noun" />
          <input name="adverbOne" type="text" placeholder="adverb" />
          <input name="verb" type="text" placeholder="verb" />
          the
          <input name="adjectiveTwo" type="text" placeholder="adjective" />
          <input name="nounTwo" type="text" placeholder="noun" />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
