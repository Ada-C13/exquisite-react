import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    id: 0,
  });

  // const onSubmitForm = () => {
  //   event.preventDefault();

  //   props.addAccountCallback(formFields);

  //   setFormFields({
  //     firstName: '',
  //     lastName: '',
  //     emaial: '',v
  //     password: '',
  //     id: 0
  //   });
  // };




  return (
    <div className="PlayerSubmissionForm" >
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input
            placeholder="adjectiv" 
            type="text" />
          <input
            placeholder="noun" 
            type="text" />
          <input
            placeholder="adverb" 
            type="text" />
          <input
            placeholder="verb" 
            type="text" />
          The
          <input
            placeholder="adjectiv"
            type="text" />
          <input
            placeholder="noun" 
            type="text" />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
