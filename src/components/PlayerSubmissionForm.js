import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState({
    the1: 'The',
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    the2: 'the',
    adj2: '',
    noun2: '',
  });

  // Dynamically load fields.
  const loadFields = () => {
    let gameFields = [];
    for (let part of props.fields) {
      if (typeof(part) === 'string') {
        gameFields.push(part);
      } else {
        gameFields.push(
          <input 
            key={part.key}
            name={part.key}
            value={ formFields[`${part.key}`] } 
            type="text" 
            placeholder={part.placeholder} 
            onChange={ updateField } 
            className={`PlayerSubmissionFormt__input ${formFields[`${part.key}`] === '' ? 'PlayerSubmissionFormt__input--invalid' : ''}`}
          />
        );
      }
    };

    return(gameFields);
  };

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
      the1: 'The',
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      the2: 'the',
      adj2: '',
      noun2: '',
    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.playerNumber }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={ updateLine }>
        <div className="PlayerSubmissionForm__poem-inputs">
          { loadFields() }
        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  playerNumber: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired
};

export default PlayerSubmissionForm;
