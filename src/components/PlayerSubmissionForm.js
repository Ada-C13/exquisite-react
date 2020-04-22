import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {
  
  const [newPoemLine, setNewPoemLine] = useState({
    adj1: "",
    noun1: "",
    adv: "",
    verb: "",
    adj2: "",
    noun2: ""
  });

  const onInputChange = (event) => {
    const updatedLine = {
      ...newPoemLine
    };

    updatedLine[event.target.name] = event.target.value;
    setNewPoemLine(updatedLine);
  };

  const onPoemLineSubmit = (event) => {
    event.preventDefault();
    if (Object.values(newPoemLine).indexOf("") === -1) { 
      props.onSubmitCallback(newPoemLine);
      setNewPoemLine({
        adj1: "",
        noun1: "",
        adv: "",
        verb: "",
        adj2: "",
        noun2: ""
      })
    }
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.currentPlayer}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onPoemLineSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">
          <input
            name="adj1"
            placeholder="adjective"
            type="text"
            value={newPoemLine.adj1}
            onChange={onInputChange}
            className={newPoemLine.adj1 === "" ? "PlayerSubmissionForm__input--invalid" : ""}
          />
          <input
            name="noun1"
            placeholder="noun"
            type="text" 
            value={newPoemLine.noun1}
            onChange={onInputChange}
            className={newPoemLine.noun1 === "" ? "PlayerSubmissionForm__input--invalid" : ""}
          />
          <input
            name="adv"
            placeholder="adverb"
            type="text" 
            value={newPoemLine.adv}
            onChange={onInputChange}
            className={newPoemLine.adv === "" ? "PlayerSubmissionForm__input--invalid" : ""}
          />
          <input
            name="verb"
            placeholder="verb"
            type="text" 
            value={newPoemLine.verb}
            onChange={onInputChange}
            className={newPoemLine.verb === "" ? "PlayerSubmissionForm__input--invalid" : ""}
          />
          <input
            name="adj2"
            placeholder="adjective"
            type="text" 
            value={newPoemLine.adj2}
            onChange={onInputChange}
            className={newPoemLine.adj2 === "" ? "PlayerSubmissionForm__input--invalid" : ""}
          />
          <input
            name="noun2"
            placeholder="noun"
            type="text" 
            value={newPoemLine.noun2}
            onChange={onInputChange}
            className={newPoemLine.noun2 === "" ? "PlayerSubmissionForm__input--invalid" : ""}
          />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input
            type="submit"
            value="Submit Line"
            className="PlayerSubmissionForm__submit-btn" 
          />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
  currentPlayer: PropTypes.number.isRequired
};

export default PlayerSubmissionForm;
