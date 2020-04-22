import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = ({onSubmitCallback, currentPlayerId}) => {

  // formFields useState hook
  const [formFields, setFormFields ] = useState({
    the1: "The",
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    the2: 'the',
    adj2: '',
    noun2: ''
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    };

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    const formFieldsArray = Object.values(formFields);

    if (!formFieldsArray.includes('')) {
      console.log('Form submitted!');

      onSubmitCallback(formFields);
      // Send data back up to App
      // props.onSubmitCallback(user);
      // clears the fields

      setFormFields({
        the1: "The",
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        the2: 'the',
        adj2: '',
        noun2: ''
      });
    }

  }

  // event handlers for form
  // validation function
  // props

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{currentPlayerId}</h3>

      <form 
        className="PlayerSubmissionForm__form" 
        onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          The
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
          the
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
  onSubmitCallback: PropTypes.func.isRequired
};

export default PlayerSubmissionForm;
