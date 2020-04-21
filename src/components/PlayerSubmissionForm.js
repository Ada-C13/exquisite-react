import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [sentence, setSentence] = useState({
    adjective1: '',
    noun1: '', 
    adverb1: '', 
    verb1: '', 
    adjective2: '',
    noun2: '',
  });


  

  const [player, nextPlayer] = useState(1);

  const onInput = (event) => {
    const newSentence = {
      ...sentence,
    }
    newSentence[event.target.name] = event.target.value;
    setSentence(newSentence);
  }

  const onSentenceSubmit = (event) => {
    event.preventDefault();

    props.callbackSentenceObject(sentence);

    setSentence({
        adjective1: '',
        noun1: '', 
        adverb1: '', 
        verb1: '', 
        adjective2: '',
        noun2: '',
      })
      
    nextPlayer(player+1);
  }

  const isEmpty = (name) => {
    return name === '';
  }

  return (
    <div className="PlayerSubmissionForm" onSubmit={onSentenceSubmit}>
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
   
          
        {props.fields.map((field) => {
      
        return (
          <div key={`${player}`}>
           <input name={`$field.key`} placeholder= {`$placeholder`} type="text" value={`$field.key`} onChange={onInput} className={isEmpty(`$key`) ? "empty" : "filled"}/>
          </div>
        )
        
        })}

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Sentence" className="PlayerSubmissionForm__submit-btn" /> {/* this type is a 'submit type */}
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
