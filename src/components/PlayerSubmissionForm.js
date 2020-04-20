import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [formFields, setformFields] = useState({
    // having these will insure that an empty object isn't passed back
    // if submit is pushed without any input
    adjective1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: '',
  })

  const onInputChange = event => {
    console.log(`Changing field ${event.target.name} to ${event.target.value}`);
    const newFormFields = {
      ...formFields,
    }

    newFormFields[event.target.name] = event.target.value;
    setformFields(newFormFields);
  }

  const onFormSubmit = event => {
    console.log("submitting form")
    event.preventDefault();
    props.addSubmissionCallback(formFields);

    setformFields({
      // reseting the form fields
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    })
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          <p>The</p>
          <input
            type='text'
            name='adjective1'
            value={formFields.adjective1}
            placeholder="adjective"
            onChange={onInputChange}
          />
          <input
            type='text'
            name='noun1'
            value={formFields.noun1}
            placeholder="noun"
            onChange={onInputChange}
          />
          <input
            type='text'
            name='adverb'
            value={formFields.adverb}
            placeholder="adverb"
            onChange={onInputChange}
          />
          <input
            type='text'
            name='verb'
            value={formFields.verb}
            placeholder="verb"
            onChange={onInputChange}
          />
          <p>the</p>
          <input
            type='text'
            name='adjective2'
            value={formFields.adjective2}
            placeholder="adjective"
            onChange={onInputChange}
          />
          <input
            type='text'
            name='noun2'
            value={formFields.noun2}
            placeholder="noun"
            onChange={onInputChange}
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
