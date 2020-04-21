import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const[formFields, setFormFields] = useState(props.fields);

  const onInputChange = (event) => {
    console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    // Duplicate formFields into new object
    const newFormFields = {
      ...formFields,
    };

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };
  
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form 
      className="PlayerSubmissionForm__form"
      // onSubmit={onFormSubmit}
      >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          {props.fields[0]} 
          <input
            placeholder={props.fields[1].placeholder}
            type="text" 
            onChange={onInputChange}/>
          <input
            placeholder={props.fields[2].placeholder}
            type="text" 
            onChange={onInputChange}/>
          <input
            placeholder={props.fields[3].placeholder}
            type="text" 
            onChange={onInputChange}/>
          <input
            placeholder={props.fields[4].placeholder}
            type="text" 
            onChange={onInputChange}/>
          {props.fields[5]} 
          <input
            placeholder={props.fields[6].placeholder}
            type="text" 
            onChange={onInputChange}/>
          <input
            placeholder={props.fields[7].placeholder}
            type="text" 
            onChange={onInputChange}/>
            {props.fields[8]} 
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
