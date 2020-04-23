import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const blankFormFields = {
    adjective1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: '',
  }

  const [formFields, setformFields] = useState(blankFormFields);

  const onInputChange = event => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setformFields(newFormFields);
  }

  const onFormSubmit = event => {
    event.preventDefault();
    props.addSubmissionCallback(formFields);
    setformFields(blankFormFields);
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          <p>The</p>
          <input className={formFields.adjective1 ? '' : 'PlayerSubmissionForm__input--invalid'}
            type='text'
            name='adjective1'
            value={formFields.adjective1}
            placeholder="adjective"
            onChange={onInputChange}
          />
          <input className={formFields.noun1 ? '' : 'PlayerSubmissionForm__input--invalid'}
            type='text'
            name='noun1'
            value={formFields.noun1}
            placeholder="noun"
            onChange={onInputChange}
          />
          <input className={formFields.adverb ? '' : 'PlayerSubmissionForm__input--invalid'}
            type='text'
            name='adverb'
            value={formFields.adverb}
            placeholder="adverb"
            onChange={onInputChange}
          />
          <input className={formFields.verb ? '' : 'PlayerSubmissionForm__input--invalid'}
            type='text'
            name='verb'
            value={formFields.verb}
            placeholder="verb"
            onChange={onInputChange}
          />
          <p>the</p>
          <input className={formFields.adjective2 ? '' : 'PlayerSubmissionForm__input--invalid'}
            type='text'
            name='adjective2'
            value={formFields.adjective2}
            placeholder="adjective"
            onChange={onInputChange}
          />
          <input className={formFields.noun2 ? '' : 'PlayerSubmissionForm__input--invalid'}
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
