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
    // console.log("form fields", formFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addSubmissionDataCallback(formFields);

    setFormFields(DefaultFieldState);
    const updatedPlayer = player + 1;
    setPlayer(updatedPlayer);
  };


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ player }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <input
            name="adj1"
            placeholder="adjective"
            type="text" 
            onChange={onInputChange}
            value={formFields.adj1}
          />
          <input 
            name="noun1"
            placeholder="noun"
            type="text"
            onChange={onInputChange}
            value={formFields.noun1}
          />
          <input 
            name="adv"
            placeholder="adverb"
            type="text"
            onChange={onInputChange}
            value={formFields.adv}
          />
           <input 
            name="verb"
            placeholder="verb"
            type="text"
            onChange={onInputChange}
            value={formFields.verb}
          />
          <input
            name="adj2"
            placeholder="adjective"
            type="text" 
            onChange={onInputChange}
            value={formFields.adj2}
          />
          <input 
            name="noun2"
            placeholder="noun"
            type="text"
            onChange={onInputChange}
            value={formFields.noun2}
          />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
