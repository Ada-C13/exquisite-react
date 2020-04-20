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

  return (
    <div className="PlayerSubmissionForm" onSubmit={onSentenceSubmit}>
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          
          The <input name='adjective1'placeholder="adjective" type="text" value={sentence.adjective1} onChange={onInput}/>
          <input name='noun1' placeholder="noun" type="text" value={sentence.noun1} onChange={onInput}/>
          <input name='adverb1' placeholder="adverb" type="text" value={sentence.adverb1} onChange={onInput}/>
          <input name='verb1' placeholder="verb" type="text" value={sentence.verb1} onChange={onInput}/> the 
          <input name='adjective2' placeholder="adjective" type="text" value={sentence.adjective2} onChange={onInput}/>
          <input name='noun2' placeholder="noun" type="text" value={sentence.noun2} onChange={onInput}/>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Sentence" className="PlayerSubmissionForm__submit-btn" /> {/* this type is a 'submit type */}
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
