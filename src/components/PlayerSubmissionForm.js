import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  const [sentence, setSentene] = useState({
    adjOne: '',
    nounOne: '',
    adv: '',
    verb: '',
    adjTwo: '',
    nounTwo: '',
  });

  // all the onChange events are using this same event handler
  const onInputChange = ((event) => {
    const newInput = {
      ...sentence,
    }
    newInput[event.target.name] = event.target.value
    setSentene(newInput)
  })

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input
            name = 'adjOne'
            placeholder="adjective"
            type="text" 
            value={sentence.adjOne}
            onChange={onInputChange}
            />

          <input
            name = 'nounOne'
            placeholder="noun"
            type="text" 
            value={sentence.nounOne}
            onChange={onInputChange}
            />  

          <input
            name = 'adverb'
            placeholder="adverb"
            type="text" 
            value={sentence.adverb}
            onChange={onInputChange}
          />

          <input
            name = 'verb'
            placeholder="verb"
            type="text" 
            value={sentence.verb}
            onChange={onInputChange}
          />
          the
          <input
            name = 'adjTwo'
            placeholder="adjective"
            type="text"
            value={sentence.adjTwo}
            onChange={onInputChange}
          />

          <input
            name = 'nounTwo'
            placeholder="noun"
            type="text" 
            value={sentence.nounTwo}
            onChange={onInputChange}
          />
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
