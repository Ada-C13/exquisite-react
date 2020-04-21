import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState({
    theOne: 'The',
    adjectiveOne: '',
    nounOne: '',
    adverbOne: '',
    verb: '',
    theTwo: 'the',
    adjectiveTwo: '',
    nounTwo: ''
  });

  const updateField = (event) => {
    const newFormFields = {...formFields};
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const updateLine = (event) => {
    event.preventDefault(); // Prevents form from trying to send to non-existent server.

    props.onFormSubmit(formFields);
    
    // Reset fields.
    setFormFields({
      theOne: 'The',
      adjectiveOne: '',
      nounOne: '',
      adverbOne: '',
      verb: '',
      theTwo: 'the',
      adjectiveTwo: '',
      nounTwo: ''
    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.playerNumber }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={ updateLine }>
        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input name="adjectiveOne" value={ formFields.adjectiveOne } type="text" placeholder="adjective" onChange={ updateField } />
          <input name="nounOne" value={ formFields.nounOne } type="text" placeholder="noun" onChange={ updateField } />
          <input name="adverbOne" value={ formFields.adverbOne } type="text" placeholder="adverb" onChange={ updateField } />
          <input name="verb" value={ formFields.verb }  type="text" placeholder="verb" onChange={ updateField } />
          the
          <input name="adjectiveTwo" value={ formFields.adjectiveTwo } type="text" placeholder="adjective" onChange={ updateField } />
          <input name="nounTwo" value={ formFields.nounTwo } type="text" placeholder="noun" onChange={ updateField } />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
