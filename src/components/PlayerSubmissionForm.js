import React, { useState } from "react";
import "./PlayerSubmissionForm.css";

const PlayerSubmissionForm = () => {
  const initialState = {
    adjective: "",
    noun: "",
    adverb: "",
    verb: "",
    adjectiveTwo: "",
    nounTwo: "",
  };
  const [formFields, setFormFields] = useState(initialState);

  const onInputChange = (event) => {
    console.log(`Changing field ${event.target.name} to ${event.target.value}`);
    const newFormField = {
      ...formFields,
    };
    newFormField[event.target.name] = event.target.value;
    setFormFields(newFormField);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setFormFields({
      ...initialState,
    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{}</h3>

      <form className="PlayerSubmissionForm__form">
        <div className="PlayerSubmissionForm__poem-inputs">
          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input
            name="adjective"
            placeholder="adjective"
            onChange={onInputChange}
            value={formFields.adjective}
          />
          <input
            name="noun"
            onChange={onInputChange}
            placeholder="noun"
            value={formFields.noun}
          />
          <input
            onChange={onInputChange}
            placeholder="adverb"
            value={formFields.adverb}
          />
          <input
            name="adverb"
            onChange={onInputChange}
            placeholder="verb"
            value={formFields.verb}
          />
          the
          <input
            name="adjectiveTwo"
            onChange={onInputChange}
            placeholder="adjective"
            value={formFields.adjectiveTwo}
          />
          <input
            name="nounTwo"
            onChange={onInputChange}
            placeholder="noun"
            value={formFields.nounTwo}
          />
        </div>
        <div className="PlayerSubmissionForm__submit">
          <input
            onSubmit={onFormSubmit}
            type="submit"
            value="Submit Line"
            className="PlayerSubmissionForm__submit-btn"
          />
        </div>
      </form>
    </div>
  );
};

export default PlayerSubmissionForm;
