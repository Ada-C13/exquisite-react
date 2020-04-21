import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          The <input
            name="adjective"
            placeholder="adjective"
            type="text"
            value="adjective"
            />
            <input
            name="noun"
            placeholder="noun"
            type="text"
            value="noun"
            />
            <input
            name="adverb"
            placeholder="adverb"
            type="text"
            value="adverb"
            />
            <input
            name="verb"
            placeholder="verb"
            type="text"
            value="verb"
            /> the
            <input
            name="adjective"
            placeholder="adjective"
            type="text"
            value="adjective"
            />
          <input
            name="noun"
            placeholder="noun"
            type="text" 
            value="noun"
            />.

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
