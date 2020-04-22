import React, { useState } from 'react';
import PropTypes from 'prop-types' 
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [sentence, setSentene] = useState({
    adjOne: '',
    nounOne: '',
    adverb: '',
    verb: '',
    adjTwo: '',
    nounTwo: '',
  });

  // all the onChange events are using this same event handler
  const onInputChange = ((event) => {
    const newInput = {
      ...sentence,
    }
    newInput[event.target.name] = event.target.value
    setSentene(newInput)
  })


  const onFormSubmit= ((event) => {
    event.preventDefault();

    props.onFormSubmitCallBack(sentence)

    setSentene({
      adjOne: '',
      nounOne: '',
      adverb: '',
      verb: '',
      adjTwo: '',
      nounTwo: '',
    })
  })

  const colorChange = (word) => {
    return word !== '' ? '' : ("PlayerSubmissionFormt__input--invalid")
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.sentences.length + 1}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input
            className={colorChange(sentence.adjOne)}
            name='adjOne'
            placeholder="adjective"
            type="text" 
            value={sentence.adjOne}
            onChange={onInputChange}
            />

          <input
            className={colorChange(sentence.nounOne)}
            name='nounOne'
            placeholder="noun"
            type="text" 
            value={sentence.nounOne}
            onChange={onInputChange}
            />  

          <input
            className={colorChange(sentence.adverb)}
            name='adverb'
            placeholder="adverb"
            type="text" 
            value={sentence.adverb}
            onChange={onInputChange} 
            />

          <input
            className={colorChange(sentence.verb)}
            name='verb'
            placeholder="verb"
            type="text" 
            value={sentence.verb}
            onChange={onInputChange}
          />
          the
          <input
            className={colorChange(sentence.adjTwo)}
            name='adjTwo'
            placeholder="adjective"
            type="text"
            value={sentence.adjTwo}
            onChange={onInputChange}
          />

          <input
            className={colorChange(sentence.nounTwo)}
            name='nounTwo'
            placeholder="noun"
            type="text" 
            value={sentence.nounTwo}
            onChange={onInputChange}
          />
          .
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  onFormSubmitCallBack: PropTypes.func.isRequired,
  sentences: PropTypes.array.isRequired,
}


export default PlayerSubmissionForm;
