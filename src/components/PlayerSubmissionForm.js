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
    // console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    
    props.onCallBackPoem(formFields);
    console.log(formFields)
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
            type="text" />
          <input
            name="firstNoun"
            value={formFields.firstNoun}
            onChange = {onInputChange}
            placeholder="noun" 
            type="text" />
          <input
            name="adverb"
            value={formFields.adverb} 
            onChange = {onInputChange}
            placeholder="adverb" 
            type="text" />
          <input
            name="verb"
            value={formFields.verb}
            onChange = {onInputChange} 
            placeholder="verb" 
            type="text" />
          The
          <input
            name="secondAdjective"
            value={formFields.secondAdjective}
            onChange = {onInputChange}
            placeholder="adjective" 
            type="text" />
          <input
            name= "secondNoun" 
            value={formFields.secondNoun}
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
