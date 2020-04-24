import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const defaultValues = {
    adjective1: "",
    noun1: "",
    adverb1: "",
    verb1: "",
    adjective2: "",
    noun2: ""
  };

  const [player, setPlayer] = useState(1);
  const [playerSubmission, setPlayerSubmission] = useState(defaultValues);

  const onSubmit = (event) => {
    event.preventDefault();
    updatePlayer();
    const newLine = `The ${playerSubmission.adjective1} ${playerSubmission.noun1} ${playerSubmission.adverb1} ${playerSubmission.verb1} the ${playerSubmission.adjective2} ${playerSubmission.noun2}`;
    props.onSubmitCallback(newLine); 
    setPlayerSubmission(defaultValues); 
  };

  const updatePlayer = () => {
    setPlayer(player + 1);
  };

  const inputs = {
  adj1: {
    validation: /.+/
  },
  noun1: {
    validation: /.+/
  },
  advb1: {
    validation: /.+/
  },
  verb1: {
    validation: /.+/
  },
  adj2: {
    validation: /.+/
  },
  noun2: {
    validation: /.+/
  }
};

  const onAdj1Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      adjective1: event.target.value
    };
    setPlayerSubmission(newEntry);
  };

  const onNoun1Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      noun1: event.target.value
    };
    setPlayerSubmission(newEntry);
  };

  const onAdvb1Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      adverb1: event.target.value
    };
    setPlayerSubmission(newEntry);
  };

  const onVerb1Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      verb1: event.target.value
    };
    setPlayerSubmission(newEntry);
  };

  const onAdj2Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      adjective2: event.target.value
    };
    setPlayerSubmission(newEntry);
  };

  const onNoun2Entry = (event) => {
    const newEntry = {
      ...playerSubmission, 
      noun2: event.target.value
    };
    setPlayerSubmission(newEntry);
  };


  const fieldValid = fieldName => {
    return inputs[fieldName].validation.test(playerSubmission[fieldName]);
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          The 
          {
            <input
            className={playerSubmission.adjective1 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}
            value={playerSubmission.adjective1} 
            onChange={onAdj1Entry}
            placeholder="adjective"/>
          }{
            <input className={playerSubmission.noun1 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}
            value={playerSubmission.noun1} 
            onChange={onNoun1Entry}
            placeholder="noun"/>
          }{
            <input className={playerSubmission.adverb1 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}
            value={playerSubmission.adverb1} 
            onChange={onAdvb1Entry}
            placeholder="adverb"/>
          }{
            <input className={playerSubmission.verb1 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}
            value={playerSubmission.verb1} 
            onChange={onVerb1Entry}
            placeholder="verb"/>
          }
          the
          {
            <input className={playerSubmission.adjective2 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}
            value={playerSubmission.adjective2} 
            onChange={onAdj2Entry}
            placeholder="adjective"/>
          }{
            <input className={playerSubmission.noun2 !== "" ? "valid" : "PlayerSubmissionFormt__input--invalid"}
            value={playerSubmission.noun2} 
            onChange={onNoun2Entry}
            placeholder="noun"/>
          }
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={onSubmit}/>
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired
};

export default PlayerSubmissionForm;
