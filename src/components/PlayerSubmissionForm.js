import React, { useState } from "react";
import "./PlayerSubmissionForm.css";
import PropTypes from "prop-types";

const PlayerSubmissionForm = (props) => {
  const initialState = {
    adj1: "",
    noun1: "",
    adv: "",
    verb: "",
    adj2: "",
    noun2: "",
  };
  const [sentence, setSentence] = useState(initialState);

  const onInputChange = (event) => {
    console.log(`Changing field ${event.target.name} to ${event.target.value}`);
    const setNewSentence = {
      ...sentence,
    };
    setNewSentence[event.target.name] = event.target.value;
    setSentence(setNewSentence);
  };

  const [player, nextPlayer] = useState(1);

  const onSentenceSubmit = (event) => {
    event.preventDefault();
    props.callbackSentenceForm(sentence);
    setSentence({
      ...initialState,
    });
    nextPlayer(player + 1);
  };

  return (
    <div className="PlayerSubmissionForm" onSubmit={onSentenceSubmit}>
      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form">
        <div className="PlayerSubmissionForm__poem-inputs">
          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input
            name="adj1"
            placeholder="adjective"
            onChange={onInputChange}
            value={sentence.adj1}
          />
          <input
            name="noun1"
            onChange={onInputChange}
            placeholder="noun"
            value={sentence.noun1}
          />
          <input
            name="adv"
            onChange={onInputChange}
            placeholder="adverb"
            value={sentence.adv}
          />
          <input
            name="verb"
            onChange={onInputChange}
            placeholder="verb"
            value={sentence.verb}
          />
          the
          <input
            name="adj2"
            onChange={onInputChange}
            placeholder="adjective"
            value={sentence.adj2}
          />
          <input
            name="noun2"
            onChange={onInputChange}
            placeholder="noun"
            value={sentence.noun2}
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
};

PlayerSubmissionForm.propTypes = {
  player: PropTypes.number.isRequired,
  fields: PropTypes.object.isRequired,
  callbackSentenceForm: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
