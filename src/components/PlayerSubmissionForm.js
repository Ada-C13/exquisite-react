import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  
  const [count, setCurrenCount] = useState(1); 
  const [formFields, setFormFields] = useState({
    firstAdjective: '',
    firstNoun: '',
    adverb: '',
    verb: '',
    secondAdjective:'',
    secondNoun: '',
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onSubmitForm = (event) => {
    if (!inputValid()) return;

    event.preventDefault();
    
    props.onCallBackPoem(formFields);
    setCurrenCount(count + 1)

    setFormFields({
      firstAdjective: '',
      firstNoun: '',
      adverb: '',
      verb: '',
      secondAdjective:'',
      secondNoun: '',
    });
  };

  const inputValid = () => {
    return formFields.firstAdjective.match(/[a-zA-Z]/)
    && formFields.firstNoun.match(/[a-zA-Z]/) 
    && formFields.adverb.match(/[a-zA-Z]/) 
    && formFields.verb.match(/[a-zA-Z]/) 
    && formFields.secondAdjective.match(/[a-zA-Z]/)
    && formFields.secondNoun.match(/[a-zA-Z]/)
  }

  return (
    <div className="PlayerSubmissionForm" onSubmit = {onSubmitForm}>
      <h3>Player Submission Form for Player #{count}</h3>

      <form className="PlayerSubmissionForm__form">

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input
            name="firstAdjective"
            value={formFields.firstAdjective}
            onChange = {onInputChange}
            placeholder="adjective" 
            className = {inputValid()? "valid" : "PlayerSubmissionFormt__input--invalid"}
            type="text" />
          <input
            name="firstNoun"
            value={formFields.firstNoun}
            className = {inputValid()? "valid" : "PlayerSubmissionFormt__input--invalid"}
            onChange = {onInputChange}
            placeholder="noun" 
            type="text" />
          <input
            name="adverb"
            value={formFields.adverb} 
            className = {inputValid()? "valid" : "PlayerSubmissionFormt__input--invalid"}
            onChange = {onInputChange}
            placeholder="adverb" 
            type="text" />
          <input
            name="verb"
            value={formFields.verb}
            className = {inputValid()? "valid" : "PlayerSubmissionFormt__input--invalid"}
            onChange = {onInputChange} 
            placeholder="verb" 
            type="text" />
          The
          <input
            name="secondAdjective"
            value={formFields.secondAdjective}
            className = {inputValid()? "valid" : "PlayerSubmissionFormt__input--invalid"}
            onChange = {onInputChange}
            placeholder="adjective" 
            type="text" />
          <input
            name= "secondNoun" 
            value={formFields.secondNoun}
            className = {inputValid()? "valid" : "PlayerSubmissionFormt__input--invalid"}
            onChange = {onInputChange}
            placeholder="noun"
            type="text" />
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
