import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const DefaultFieldState = 
{
  adj1: "",
  noun1: "",
  adv: "",
  verb: "",
  adj2: "",
  noun2: ""
};

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState(DefaultFieldState);
  const [player, setPlayer] = useState(1);

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields
    };

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addSubmissionDataCallback(formFields);

    setFormFields(DefaultFieldState);
    const updatedPlayer = player + 1;
    setPlayer(updatedPlayer);
  };

  const validInput = (value) => {
    return value === ""
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ player }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input
            name="adj1"
            placeholder="adjective"
            type="text" 
            onChange={onInputChange}
            value={formFields.adj1}
            className={validInput(formFields.adj1) ? "invalid" : "valid"}
          />
          <input 
            name="noun1"
            placeholder="noun"
            type="text"
            onChange={onInputChange}
            value={formFields.noun1}
            className={validInput(formFields.noun1) ? "invalid" : "valid"}
          />
          <input 
            name="adv"
            placeholder="adverb"
            type="text"
            onChange={onInputChange}
            value={formFields.adv}
            className={validInput(formFields.adv) ? "invalid" : "valid"}
          />
           <input 
            name="verb"
            placeholder="verb"
            type="text"
            onChange={onInputChange}
            value={formFields.verb}
            className={validInput(formFields.verb) ? "invalid" : "valid"}
          />
          the
          <input
            name="adj2"
            placeholder="adjective"
            type="text" 
            onChange={onInputChange}
            value={formFields.adj2}
            className={validInput(formFields.adj2) ? "invalid" : "valid"}
          />
          <input 
            name="noun2"
            placeholder="noun"
            type="text"
            onChange={onInputChange}
            value={formFields.noun2}
            className={validInput(formFields.noun2) ? "invalid" : "valid"}
          />
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
