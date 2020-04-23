import React, { useState } from 'react';
import './PlayerSubmissionForm.css';


const PlayerSubmissionForm = (props) => {

  const [submission, setSubmission] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    console.log(event.target)

    props.onSubmitCallback(submission)

    setSubmission({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    })

  };

  const onInputChange = (event) => {
    console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);

    const newSubmissionFields = {
      ...submission,
    }
  
    newSubmissionFields[event.target.name] = event.target.value;
    setSubmission(newSubmissionFields);
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.playerNumber}</h3>

      <form 
        className="PlayerSubmissionForm__form" 
        onSubmit={onFormSubmit}
      >

        <div className="PlayerSubmissionForm__poem-inputs">

          <p>{props.fields[0]}</p>
          
          <input
            placeholder={props.fields[1].placeholder}
            value={submission.adj1}
            name="adj1"
            type="text"
            onChange={onInputChange}
            className={ submission.adj1 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}
          />

            <input
            placeholder={props.fields[2].placeholder}
            value={submission.noun1}
            name="noun1"
            type="text"
            onChange={onInputChange}
            className={ submission.noun1 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}/>

            <input
            placeholder={props.fields[3].placeholder}
            value={submission.adv}
            name="adv"
            type="text"
            onChange={onInputChange}
            className={ submission.adv !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}/>

            <input
            placeholder={props.fields[4].placeholder}
            value={submission.verb}
            name="verb"
            type="text"
            onChange={onInputChange}
            className={ submission.verb !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}/>

            <p>{props.fields[5]}</p>

            <input
            placeholder={props.fields[6].placeholder}            
            value={submission.adj2}
            name="adj2"
            type="text"
            onChange={onInputChange}
            className={ submission.adj2 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}/>

            <input
            placeholder={props.fields[7].placeholder}
            value={submission.noun2}
            name="noun2"
            type="text"
            onChange={onInputChange}
            className={ submission.noun2 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}/>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
