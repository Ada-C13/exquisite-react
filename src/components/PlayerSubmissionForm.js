import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PlayerSubmissionForm.css";

const PlayerSubmissionForm = ({ playerNumber, onSubmitClick }) => {
  const [formFields, setFormFields] = useState({
    adjective: "",
    noun: "",
    adverb: "",
    verb: "",
    adjectiveTwo: "",
    nounTwo: "",
  });

  const onInputChange = (event) => {
    console.log(
      `Changing the field ${event.target.name} to ${event.target.value}`
    );
    const newFormFields = {
      ...formFields,
    };
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmitClick(formFields);

    setFormFields({
      adjective: "",
      noun: "",
      adverb: "",
      verb: "",
      adjectiveTwo: "",
      nounTwo: "",
    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{playerNumber}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>
        <div className="PlayerSubmissionForm__poem-inputs">
          <input
            placeholder="adjective"
            name="adjective"
            type="text"
            onChange={onInputChange}
            value={formFields.adjective}
          />
          <input
            placeholder="noun"
            name="noun"
            type="text"
            onChange={onInputChange}
            value={formFields.noun}
          />
          <input
            placeholder="adverb"
            name="adverb"
            type="text"
            onChange={onInputChange}
            value={formFields.adverb}
          />
          <input
            placeholder="verb"
            name="verb"
            type="text"
            onChange={onInputChange}
            value={formFields.verb}
          />
          <input
            placeholder="adjective"
            name="adjectiveTwo"
            type="text"
            onChange={onInputChange}
            value={formFields.adjectiveTwo}
          />
          <input
            placeholder="noun"
            name="nounTwo"
            type="text"
            onChange={onInputChange}
            value={formFields.nounTwo}
          />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input
            type="submit"
            value="Submit Line"
            className="PlayerSubmissionForm__submit-btn"
          />
        </div>
      </form>
    </div>
  );
};

PlayerSubmissionForm.propTypes = {
  playerNumber: PropTypes.number.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
