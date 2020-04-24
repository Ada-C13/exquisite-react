import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {
  const [fields, setFields] /* destructuring array - first element is fields, second element is setFields */ = useState(
    { 
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
  });

  const onInputChange = event => {
    const { name, value } = event.target;

    const newFields = {
      ...fields,
      [name]: value // [name] get value of name and use it as the key | value is the variable above
      // line 46 is equivalent to: newFields[name] = value
    };
  
    setFields(newFields);
  };

  const onFormSubmit = (event) => {
    // prevent browser from trying to submit form
    event.preventDefault();

    props.onSubmit(fields);

    // reset fields
    setFields({
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

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input
            name="adj1"
            onChange={onInputChange}
            value={fields.adj1}
            placeholder="adjective"
            type="text" 
          />
          
          <input
            name="noun1"
            onChange={onInputChange}
            value={fields.noun1}
            placeholder="noun"
            type="text" 
          />
          
          <input
            name="adv"
            onChange={onInputChange}
            value={fields.adv}
            placeholder="adverb"
            type="text" 
          />

          <input
            name="verb"
            onChange={onInputChange}
            value={fields.verb}
            placeholder="verb"
            type="text" 
          /> 
          the 
          <input
            name="adj2"
            onChange={onInputChange}
            value={fields.adj2}
            placeholder="adjective"
            type="text" 
          />

          <input
            name="noun2"
            onChange={onInputChange}
            value={fields.noun2}
            placeholder="noun"
            type="noun" 
          />.

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
            type="submit" 
            value="Submit Line" 
            className="PlayerSubmissionForm__submit-btn" 
          />
        </div>
      </form>
    </div>
  );
}

// TODO Need to add propTypes

export default PlayerSubmissionForm;
