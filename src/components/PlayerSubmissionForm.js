import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  
  const emptyLine = {
    adj1 : '',
    noun1 : '',
    adverb : '',
    verb: '',
    adj2 : '',
    noun2 : ''
  }
  
  const [lineFields, setLineFields] = useState(emptyLine);

  const onInputChange = (event) => {
    // duplicate lineFields into a new object
    const newLineFields = {
      ...lineFields,
    }

    // identify which field to update 
    newLineFields[event.target.name] = event.target.value;

    // update state of the fields
    setLineFields(newLineFields);
  }

  const onSubmitLine = (event) => {
    event.preventDefault();

    // combine line fields into one string
    const line = 'The'.concat(` ${lineFields.adj1}`).concat(` ${lineFields.noun1}`).concat(` ${lineFields.adverb}`).concat(` ${lineFields.verb}`).concat(' the').concat(` ${lineFields.adj2}`).concat(` ${lineFields.noun2}`).concat('.')

    // send submission back to Game.js 
    props.onSubmitCallback(line);

    // reset fields
    setLineFields(emptyLine);
  }


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.currentPlayer}</h3>

      <form onSubmit={onSubmitLine} className="PlayerSubmissionForm__form">

        <div className="PlayerSubmissionForm__poem-inputs">

          <p>The</p>

          <input
            value = {lineFields.adj1}
            onChange={onInputChange}
            name={Object.keys(lineFields)[0]}
            placeholder={'adjective'}
            type="text" 
            className={lineFields.adj1 === '' ? "PlayerSubmissionForm__poem-inputs-unfilled" : "PlayerSubmissionForm__poem-inputs-filled"}/>
          
          <input
            value = {lineFields.noun1}
            onChange={onInputChange}
            name={Object.keys(lineFields)[1]}
            placeholder={'noun'}
            type="text" 
            className={lineFields.noun1 === '' ? "PlayerSubmissionForm__poem-inputs-unfilled" : "PlayerSubmissionForm__poem-inputs-filled"}/>

          <input
            value = {lineFields.adverb}
            onChange={onInputChange}
            name={Object.keys(lineFields)[2]}
            placeholder={'adverb'}
            type="text" 
            className={lineFields.adverb === '' ? "PlayerSubmissionForm__poem-inputs-unfilled" : "PlayerSubmissionForm__poem-inputs-filled"}/>
          
          <input
            value = {lineFields.verb}
            onChange={onInputChange}
            name={Object.keys(lineFields)[3]}
            placeholder={'verb'}
            type="text" 
            className={lineFields.verb === '' ? "PlayerSubmissionForm__poem-inputs-unfilled" : "PlayerSubmissionForm__poem-inputs-filled"}/>

          <p>the</p>

          <input
            value = {lineFields.adj2}
            onChange={onInputChange}
            name={Object.keys(lineFields)[4]}
            placeholder={'adjective'}
            type="text" 
            className={lineFields.adj2 === '' ? "PlayerSubmissionForm__poem-inputs-unfilled" : "PlayerSubmissionForm__poem-inputs-filled"}/>
          
          <input
            value = {lineFields.noun2}
            onChange={onInputChange}
            name={Object.keys(lineFields)[5]}
            placeholder={'noun'}
            type="text" 
            className={lineFields.noun2 === '' ? "PlayerSubmissionForm__poem-inputs-unfilled" : "PlayerSubmissionForm__poem-inputs-filled"}/>

          <p>.</p>
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;