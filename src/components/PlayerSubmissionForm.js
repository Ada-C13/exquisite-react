import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [line, setLine] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

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
      line.adj1 !== '' &&
      line.noun1 !== '' &&
      line.adv !== '' &&
      line.verb !== '' &&
      line.adj2 !== '' &&
      line.noun2 !== ''
    ) {
      props.onClickCallback(line);
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

  

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input className="PlayerSubmissionFormt__input--invalid"
            name="adj1"
            onChange={onInputChange}
            placeholder="adjective"
            value={line.adj1}
            type="text" />
          <input className="PlayerSubmissionFormt__input--invalid"
            name="noun1"
            onChange={onInputChange}
            placeholder="noun"
            value={line.noun1}
            type="text" />
          <input className="PlayerSubmissionFormt__input--invalid"
            name="adv"
            onChange={onInputChange}
            placeholder="adverb"
            value={line.adv}
            type="text" />
          <input className="PlayerSubmissionFormt__input--invalid"
            name="verb"
            onChange={onInputChange}
            placeholder="verb"
            value={line.verb}
            type="text" />
          the
          <input className="PlayerSubmissionFormt__input--invalid"
            name="adj2"
            onChange={onInputChange}
            placeholder="adjective"
            value={line.adj2}
            type="text" />
          <input className="PlayerSubmissionFormt__input--invalid"
            name="noun2"
            onChange={onInputChange}
            placeholder="noun"
            value={line.noun2}
            type="text" />

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
  );
}


export default PlayerSubmissionForm;
