import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          {
            // Put your form inputs here... We've put in one below as an example
          <input
            placeholder="adjective"
            type="text" />
          }
          { <input
            placeholder="noun"
            type="text" />
          }
          { <input
            placeholder="adverb"
            type="text" />
          }
          { <input
            placeholder="verb"
            type="text" />
          }
          the
          { <input
            placeholder="adjective"
            type="text" />
          }
          { <input
            placeholder="noun"
            type="text" />
          }
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
