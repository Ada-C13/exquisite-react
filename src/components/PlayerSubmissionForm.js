import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
//import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {

  const [field, setField] = useState({
    adjective: '',
    noun: '', 
    adverb: '', 
    verb: '', 
    adjective1: '',
    noun1: '',
  });

  const [player, nextPlayer] = useState(1);

  const onInput = (event) => {
    const newPoem = {
      ...field,
    }
    newPoem[event.target.name]  = event.target.value;
    setField(newPoem);
  }

  const onSubmitField= (event) => {
    event.preventDefault();

    props.onCallbackField(field);

    setField({
      adjective: '',
      noun: '', 
      adverb: '', 
      verb: '', 
      adjective1: '',
      noun1: '',
    });
    nextPlayer(player + 1);
  }

  return (
    <div className="PlayerSubmissionForm" onSubmit={onSubmitField}>
      <h3>Player Submission Form for Player #{ player }</h3>

      <form className="PlayerSubmissionForm__form">

        <div className="PlayerSubmissionForm__poem-inputs">
          The <input name='adjective'placeholder="adjective" type="text" value={field.adjective} onChange={onInput}/>
          <input name='noun' placeholder="noun" type="text" value={field.noun} onChange={onInput}/>
          <input name='adverb' placeholder="adverb" type="text" value={field.adverb} onChange={onInput}/>
          <input name='verb' placeholder="verb" type="text" value={field.verb} onChange={onInput}/> the 
          <input name='adjective1' placeholder="adjective" type="text" value={field.adjective1} onChange={onInput}/>
          <input name='noun1' placeholder="noun" type="text" value={field.noun1} onChange={onInput}/>
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
