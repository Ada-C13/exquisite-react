import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState(
    {
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    }
  );

  const inputValid = (field) => {
    if (field !== "") {
      return true;
    } else {
      return false;
    }
  }

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    };
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //send data back up to Game
    props.onSubmitCallback(formFields);
    
    // clears all fields for next player's input
    setFormFields({
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={handleSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">
          The

          <input
            name="adj1"
            placeholder="adjective"
            type="text"
            value={formFields.adj1} 
            onChange={onInputChange}
            className={inputValid(formFields.adj1) ? "PlayerSubmissionForm__poem-inputs" : "PlayerSubmissionForm__input--invalid"}
          />

          <input
            name="noun1"
            placeholder="noun"
            type="text"
            value={formFields.noun1} 
            onChange={onInputChange}
            className={inputValid(formFields.noun1) ? "PlayerSubmissionForm__poem-inputs" : "PlayerSubmissionForm__input--invalid"}
          />

          <input
            name="adv"
            placeholder="adverb"
            type="text"
            value={formFields.adv} 
            onChange={onInputChange}
            className={inputValid(formFields.adv) ? "PlayerSubmissionForm__poem-inputs" : "PlayerSubmissionForm__input--invalid"}
          />

          <input
            name="verb"
            placeholder="verb"
            type="text"
            value={formFields.verb} 
            onChange={onInputChange}
            className={inputValid(formFields.verb) ? "PlayerSubmissionForm__poem-inputs" : "PlayerSubmissionForm__input--invalid"}
          />

          the

          <input
            name="adj2"
            placeholder="adjective"
            type="text"
            value={formFields.adj2} 
            onChange={onInputChange}
            className={inputValid(formFields.adj2) ? "PlayerSubmissionForm__poem-inputs" : "PlayerSubmissionForm__input--invalid"}
          />

          <input
            name="noun2"
            placeholder="noun"
            type="text"
            value={formFields.noun2} 
            onChange={onInputChange}
            className={inputValid(formFields.noun2) ? "PlayerSubmissionForm__poem-inputs" : "PlayerSubmissionForm__input--invalid"}
          />

          .
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input
            type="submit"
            value="Submit Line"
            className="PlayerSubmissionForm__submit-btn"
            // why onClick instead of onSubmit if type of input is submit?
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}


PlayerSubmissionForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;