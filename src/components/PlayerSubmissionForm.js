import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
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
          <Input
            placeholder="adjective"
            name="adjective"
            type="text"
            onChange={onInputChange}
            value={formFields.adjective}
          />
          <Input
            className="x"
            placeholder="noun"
            name="noun"
            type="text"
            onChange={onInputChange}
            value={formFields.noun}
          />
          <Input
            placeholder="adverb"
            name="adverb"
            type="text"
            onChange={onInputChange}
            value={formFields.adverb}
          />
          <Input
            placeholder="verb"
            name="verb"
            type="text"
            onChange={onInputChange}
            value={formFields.verb}
          />
          <Input
            placeholder="adjective"
            name="adjectiveTwo"
            type="text"
            onChange={onInputChange}
            value={formFields.adjectiveTwo}
          />
          <Input
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
