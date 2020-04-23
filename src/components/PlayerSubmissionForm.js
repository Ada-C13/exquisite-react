import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({ player, onLineSubmitCallback, revealPoem }) => {

  const [ fieldInput, setFieldInput ] = useState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
  });

  const isValid = (field) => {
    if (field === '') return "PlayerSubmissionForm__input-invalid";
  }; // helper function for changing input background color if field is empty

  const onInputChange = (event) => {
    const { name, value } = event.target;
    const newFieldInput = {
      ...fieldInput,
      [name]: value,
    };
    
    setFieldInput(newFieldInput);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    const checkFields = (fields) => {
      for (const key in fields) {
        if (fields[key] === '') {
          return false; 
        };
      };
      return true;
    }; // helper function that prevents submission before all the fields have been filled

    if (checkFields(fieldInput)) {
      onLineSubmitCallback(fieldInput); // send data back to Game

      setFieldInput({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
    };
  };

  if (revealPoem) {
    return null;
  } else {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{player}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            <div>
              <span>The</span>
            </div>

            <div>
              <label htmlFor="adj1">adjective</label>
                <input 
                  name="adj1" 
                  placeholder="adjective"
                  value={fieldInput.adj1}
                  className={isValid(fieldInput.adj1)}
                  onChange={onInputChange}
                />
            </div>

            <div>
              <label htmlFor="noun1">noun</label>
                <input 
                  name="noun1" 
                  placeholder="noun"
                  value={fieldInput.noun1}
                  className={isValid(fieldInput.noun1)}
                  onChange={onInputChange}
                />
            </div>

            <div>
              <label htmlFor="adv">adverb</label>
                <input 
                  name="adv" 
                  placeholder="adverb"
                  value={fieldInput.adv}
                  className={isValid(fieldInput.adv)}
                  onChange={onInputChange}
                />
            </div>

            <div>
              <label htmlFor="verb">verb</label>
                <input 
                  name="verb" 
                  placeholder="verb"
                  value={fieldInput.verb}
                  className={isValid(fieldInput.verb)}
                  onChange={onInputChange}
                />
            </div>

            <div>
              <span>the</span>
            </div>

            <div>
              <label htmlFor="adj2">adjective</label>
                <input 
                  name="adj2"
                  placeholder="adjective"
                  value={fieldInput.adj2}
                  className={isValid(fieldInput.adj2)}
                  onChange={onInputChange}
                />
            </div>

            <div>
              <label htmlFor="noun2">noun</label>
                <input 
                  name="noun2" 
                  placeholder="noun"
                  value={fieldInput.noun2}
                  className={isValid(fieldInput.noun2)}
                  onChange={onInputChange}
                />
            </div>

            <div>
              <span>.</span>
            </div>

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
};

PlayerSubmissionForm.propTypes = {
  player: PropTypes.number.isRequired,
  onLineSubmitCallback: PropTypes.func.isRequired,
  revealPoem: PropTypes.bool.isRequired,
};

export default PlayerSubmissionForm;
