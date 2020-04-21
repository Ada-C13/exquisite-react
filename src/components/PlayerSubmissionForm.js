import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {

  const[formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });


  const onInputChange = (event) => {
    // Duplicate formFields into new object
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
    formFields.adv !==  '' &&  
    formFields.verb !== '' && 
    formFields.adj2 !== '' && 
    formFields.noun2 !== '') {
      // Send that data back up to App
      props.onSubmitCallback(formFields)
      // Clear the fields
      setFormFields({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',    
        noun2: '',        
      })
    }
  };

  
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form 
      className="PlayerSubmissionForm__form"
      onSubmit={onFormSubmit}
      >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          {props.fields[0]} 
          <input
            name="adj1"
            placeholder={props.fields[1].placeholder}
            type="text" 
            onChange={onInputChange}
            value={formFields.adj1}/>
          <input
            name="noun1"
            placeholder={props.fields[2].placeholder}
            type="text" 
            onChange={onInputChange}
            value={formFields.noun1}/>
          <input
            name="adv"
            placeholder={props.fields[3].placeholder}
            type="text" 
            onChange={onInputChange}
            value={formFields.adv}/>
          <input
            name="verb"
            placeholder={props.fields[4].placeholder}
            type="text" 
            onChange={onInputChange}
            value={formFields.verb}/>
          {props.fields[5]} 
          <input
            name="adj2"
            placeholder={props.fields[6].placeholder}
            type="text" 
            onChange={onInputChange}
            value={formFields.adj2}/>
          <input
            name="noun2"
            placeholder={props.fields[7].placeholder}
            type="text" 
            onChange={onInputChange}
            value={formFields.noun2}/>
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
}


export default PlayerSubmissionForm;
