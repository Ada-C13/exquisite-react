import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  
  const [playerSubmission, setPlayerSubmission] = useState({
    adjective1: "adjective",
    noun1: "noun",
    adverb1: "adverb",
    verb1: "verb",
    adjective2: "adjective",
    noun2: "noun"
  }

  )

  const onEntry = (event) => {
    const newEntry = {
      ...playerSubmission, 

    }

    setPlayerSubmission(newEntry)
    // console.log(event.target.value)
  }
  const onAdj1Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      adjective1: event.target.value
    }

    setPlayerSubmission(newEntry)
    // console.log(event.target.value)
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          The 
          {
            // Put your form inputs here... We've put in one below as an example
            <input name="adjective" value={playerSubmission.adjective1} onChange={onAdj1Entry}/>
          }{
            <input name="noun" value={playerSubmission.noun1} onChange={onEntry}/>
          }{
            <input name="adverb" value={playerSubmission.adverb1} onChange={onEntry}/>
          }{
            <input name="verb" value={playerSubmission.verb1} onChange={onEntry}/>
          }
          the
          {
            <input name="adjective" value={playerSubmission.adjective2} onChange={onEntry}/>
          }{
            <input name="noun" value={playerSubmission.noun2} onChange={onEntry}/>
          }

          {/* <input
            placeholder="hm..."
            type="text" /> */}

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
