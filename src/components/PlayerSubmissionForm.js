import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [line, setLine] = useState({
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj2: '',
    noun2: ''
  })
  

  // this function is tracking ON CHANGE
  const onInputChange = (event) => {
    
    const newLine = {
      ...line
    }

    console.log(newLine);

    newLine[event.target.name] = event.target.value;
    setLine(newLine);

    console.log(newLine)
  }


  return (
    <div className="PlayerSubmissionForm">
      
      <h3>Player Submission Form for Player #{}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <span>The</span>
          <input
            name="adj1"
            placeholder="adjective..."
            value={line.adj1}
            type="text" 
            onChange={onInputChange}
          />

          <input
            name='noun1'
            placeholder="noun..."
            value={line.noun1}
            type="text" 
            onChange={onInputChange}
          />

          <input
            name='adverb'
            placeholder="adverb..."
            value={line.adverb}
            type="text" 
            onChange={onInputChange} 
          />

          <input
            name='verb'
            placeholder="verb..."
            value={line.verb}
            type="text" 
            onChange={onInputChange} 
          />

          <span>the</span>

          <input
            name='adj2'
            placeholder="adjective..."
            value={line.adj2}
            type="text" 
            onChange={onInputChange}
          />

          <input
            name='noun2'
            placeholder="noun..."
            value={line.noun2}
            type="text" 
            onChange={onInputChange}
          />

          <span>.</span>
  
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
