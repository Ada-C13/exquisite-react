import React, { useState } from "react";
import "./PlayerSubmissionForm.css";

const PlayerSubmissionForm = () => {
  const initialState = {
    adj1: "",
    noun: "",
    adv: "",
    verb: "",
    adj2: "",
    noun2: "",
  };
  const [sentence, setSentence] = useState(initialState);

  const onInputChange = (event) => {
    console.log(`Changing field ${event.target.name} to ${event.target.value}`);
    const newFormField = {
      ...sentence,
    };
    newFormField[event.target.name] = event.target.value;
    setSentence(newFormField);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSentence({
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
            name="adj1"
            placeholder="adjective"
            onChange={onInputChange}
            value={sentence.adj1}
          />
          <input
            name="noun"
            onChange={onInputChange}
            placeholder="noun"
            value={sentence.noun}
          />
          <input
            onChange={onInputChange}
            placeholder="adverb"
            value={sentence.adv}
          />
          <input
            name="adverb"
            onChange={onInputChange}
            placeholder="adverb"
            value={sentence.verb}
          />
          the
          <input
            name="adj2"
            onChange={onInputChange}
            placeholder="adjective"
            value={sentence.adj2}
          />
          <input
            name="nounTwo"
            onChange={onInputChange}
            placeholder="noun"
            value={sentence.noun2}
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
