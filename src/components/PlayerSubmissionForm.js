import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  // formFields Hook goes here
  // onInputChange goes here
  // textValidation goes here
  // onFormSubmit goes here
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
        The
        <input
          name="adj1"
          placeholder="adjective"
          type="text"
          // noChange={onInputChange}
          // value={formFields.adj1}
        />
        <input
          name="noun1"
          placeholder="noun"
          type="text"
          // noChange={onInputChange}
          // value={formFields.noun1}
        />
        <input
          name="adv"
          placeholder="adverb"
          type="text"
          // noChange={onInputChange}
          // value={formFields.adv}
        />
        <input
          name="verb"
          placeholder="verb"
          type="text"
          // noChange={onInputChange}
          // value={formFields.verb}
        />
        <input
          name="adj2"
          placeholder="adjective"
          type="text"
          // noChange={onInputChange}
          // value={formFields.adj2}
        />
        <input
          name="noun2"
          placeholder="noun"
          type="text"
          // noChange={onInputChange}
          // value={formFields.noun2}
        />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

// PropTypes go here

export default PlayerSubmissionForm;
