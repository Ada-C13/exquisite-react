import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState({
    theOne: 'The',
    adjectiveOne: '',
    nounOne: '',
    adverbOne: '',
    verb: '',
    theTwo: 'the',
    adjectiveTwo: '',
    nounTwo: '',
    period: '.'
  });

  // Update a specific field.
  const updateField = (event) => {
    const newFormFields = {...formFields};
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  // Submit a line.
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
      nounTwo: '',
      period: '.'
    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.playerNumber }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={ updateLine }>
        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input 
            name="adjectiveOne" 
            value={ formFields.adjectiveOne } 
            type="text" 
            placeholder="adjective" 
            onChange={ updateField } 
            className={`PlayerSubmissionFormt__input ${formFields.adjectiveOne === '' ? 'PlayerSubmissionFormt__input--invalid' : ''}`}
          />
          <input 
            name="nounOne" 
            value={ formFields.nounOne } 
            type="text" 
            placeholder="noun" 
            onChange={ updateField } 
            className={`PlayerSubmissionFormt__input ${formFields.nounOne === '' ? 'PlayerSubmissionFormt__input--invalid' : ''}`} 
          />
          <input 
            name="adverbOne" 
            value={ formFields.adverbOne } 
            type="text" 
            placeholder="adverb" 
            onChange={ updateField } 
            className={`PlayerSubmissionFormt__input ${formFields.adverbOne === '' ? 'PlayerSubmissionFormt__input--invalid' : ''}`} 
          />
          <input 
            name="verb" 
            value={ formFields.verb } 
            type="text" 
            placeholder="verb" 
            onChange={ updateField } 
            className={`PlayerSubmissionFormt__input ${formFields.verb === '' ? 'PlayerSubmissionFormt__input--invalid' : ''}`}
          />
          the
          <input 
            name="adjectiveTwo" 
            value={ formFields.adjectiveTwo } 
            type="text" placeholder="adjective" 
            onChange={ updateField } 
            className={`PlayerSubmissionFormt__input ${formFields.adjectiveTwo === '' ? 'PlayerSubmissionFormt__input--invalid' : ''}`}
          />
          <input 
            name="nounTwo" 
            value={ formFields.nounTwo } 
            type="text" placeholder="noun" 
            onChange={ updateField } 
            className={`PlayerSubmissionFormt__input ${formFields.nounTwo === '' ? 'PlayerSubmissionFormt__input--invalid' : ''}`}
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

PlayerSubmissionForm.propTypes = {
  theOne: PropTypes.string.isRequired,
  adjectiveOne: PropTypes.string.isRequired,
  nounOne: PropTypes.string.isRequired,
  adverbOne: PropTypes.string.isRequired,
  verb: PropTypes.string.isRequired,
  theTwo: PropTypes.string.isRequired,
  adjectiveTwo: PropTypes.string.isRequired,
  nounTwo: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired
};


export default PlayerSubmissionForm;
