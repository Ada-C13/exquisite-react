import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState({
    The: 'The',
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    the: 'the',
    adj2: '',
    noun2: '',
    dot: '.',
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
    if (formFields.adj1 !== '' &&
      formFields.noun1 !== '' &&
      formFields.adv !== '' &&
      formFields.verb !== '' &&
      formFields.adj2 !== '' &&
      formFields.noun2 !== '') {
      // Send that data back up to App
      props.onSubmitCallback(formFields)
      // Clear the fields
      setFormFields({
        The: 'The',
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        the: 'the',
        adj2: '',
        noun2: '',
        dot: '.',
      })
    }
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.count}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {props.fields[0]}
          <input
            name="the"
            type="hidden"
            value={props.fields[0]} />
          <input
            name="adj1"
            placeholder={props.fields[1].placeholder}
            type="text"
            onChange={onInputChange}
            value={formFields.adj1} />
          <input
            name="noun1"
            placeholder={props.fields[2].placeholder}
            type="text"
            onChange={onInputChange}
            value={formFields.noun1} />
          <input
            name="adv"
            placeholder={props.fields[3].placeholder}
            type="text"
            onChange={onInputChange}
            value={formFields.adv} />
          <input
            name="verb"
            placeholder={props.fields[4].placeholder}
            type="text"
            onChange={onInputChange}
            value={formFields.verb} />
          {props.fields[5]}
          <input
            name="the"
            type="hidden"
            value={props.fields[5]} />
          <input
            name="adj2"
            placeholder={props.fields[6].placeholder}
            type="text"
            onChange={onInputChange}
            value={formFields.adj2} />
          <input
            name="noun2"
            placeholder={props.fields[7].placeholder}
            type="text"
            onChange={onInputChange}
            value={formFields.noun2} />
          <input
            name="dot"
            type="hidden"
            value={props.fields[8]} />
          {props.fields[8]}
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>

      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
}

export default PlayerSubmissionForm;