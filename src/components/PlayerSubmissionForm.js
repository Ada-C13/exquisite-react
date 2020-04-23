import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({isDone, player, onClickCallback}) => {
  const [line, setLine] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  const {adj1, noun1, adv, verb, adj2, noun2} = line

  const onInputChange = (e) => {
    const newSubmission = {
      ...line,
    }
    newSubmission[e.target.name] = e.target.value;
    // console.log(e.target.value);
    setLine(newSubmission);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (
      adj1 !== '' &&
      noun1 !== '' &&
      adv !== '' &&
      verb !== '' &&
      adj2 !== '' &&
      noun2 !== ''
    ) {
      onClickCallback(line);
      console.log(line);

      setLine({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: ''
      });
    };
  };

  const inputDisplay = (name) => {
    return (name !== "") ? "PlayerSubmissionFormt__input--valid" : "PlayerSubmissionFormt__input--invalid";
  }

  return (
    !isDone && (
      <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input 
            className={inputDisplay(adj1)}
            name="adj1"
            onChange={onInputChange}
            placeholder="adjective"
            value={adj1}
            type="text" />
          <input 
            className={inputDisplay(noun1)}
            name="noun1"
            onChange={onInputChange}
            placeholder="noun"
            value={noun1}
            type="text" />
          <input
            className={inputDisplay(adv)}
            name="adv"
            onChange={onInputChange}
            placeholder="adverb"
            value={adv}
            type="text" />
          <input
            className={inputDisplay(verb)}
            name="verb"
            onChange={onInputChange}
            placeholder="verb"
            value={verb}
            type="text" />
          the
          <input
            className={inputDisplay(adj2)}
            name="adj2"
            onChange={onInputChange}
            placeholder="adjective"
            value={adj2}
            type="text" />
          <input
            className={inputDisplay(noun2)}
            name="noun2"
            onChange={onInputChange}
            placeholder="noun"
            value={noun2}
            type="text" />
          .
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
            type="submit"
            value="Submit Line"
            className="PlayerSubmissionForm__submit-btn"
            onClick={onFormSubmit}
          />
        </div>
      </form>
    </div>
    )
    
  );
}


export default PlayerSubmissionForm;
