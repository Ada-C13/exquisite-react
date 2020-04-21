import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  const [sentence, setSentene] = useState({
    
  });


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          {
            // Put your form inputs here... We've put in one below as an example
          }
          
          <input
            placeholder="adjective"
            type="text" />

          <input
            placeholder="none"
            type="text" />  

          <input
            placeholder="adverb"
            type="text" />

          <input
            placeholder="verb"
            type="text" />
          the
          <input
            placeholder="adjective..."
            type="text" />

          <input
            placeholder="none"
            type="text" />
          .
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
