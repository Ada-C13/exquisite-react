import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  const [player, setPlayer] = useState(1)

  const onSubmit = () => {
    updatePlayer()
  }

  const updatePlayer = () => {
    setPlayer(player + 1)
  }

  const [playerSubmission, setPlayerSubmission] = useState({
    adjective1: "adjective",
    noun1: "noun",
    adverb1: "adverb",
    verb1: "verb",
    adjective2: "adjective",
    noun2: "noun"
  });

  // const onEntry = (event) => {
  //   const newEntry = {
  //     ...playerSubmission, 

  //   }

  //   setPlayerSubmission(newEntry)
  //   // console.log(event.target.value)
  // }

  const onAdj1Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      adjective1: event.target.value
    }
    setPlayerSubmission(newEntry)
  };

  const onNoun1Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      noun1: event.target.value
    }
    setPlayerSubmission(newEntry)
  };

  const onAdvb1Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      adverb1: event.target.value
    }
    setPlayerSubmission(newEntry)
  };

  const onVerb1Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      verb1: event.target.value
    }
    setPlayerSubmission(newEntry)
  };

  const onAdj2Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      adjective2: event.target.value
    }
    setPlayerSubmission(newEntry)
  };

  const onNoun2Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      noun2: event.target.value
    }
    setPlayerSubmission(newEntry)
  };


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          The 
          {
            // Put your form inputs here... We've put in one below as an example
            <input name="adjective" value={playerSubmission.adjective1} onChange={onAdj1Entry}/>
          }{
            <input name="noun" value={playerSubmission.noun1} onChange={onNoun1Entry}/>
          }{
            <input name="adverb" value={playerSubmission.adverb1} onChange={onAdvb1Entry}/>
          }{
            <input name="verb" value={playerSubmission.verb1} onChange={onVerb1Entry}/>
          }
          the
          {
            <input name="adjective" value={playerSubmission.adjective2} onChange={onAdj2Entry}/>
          }{
            <input name="noun" value={playerSubmission.noun2} onChange={onNoun2Entry}/>
          }


        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Lineeeeeee" className="PlayerSubmissionForm__submit-btn" onClick={onSubmit}/>
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
