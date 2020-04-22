import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {

  const [fieldInput, setFieldInput] = useState ({
    adj1: '',
    noun1: '', 
    adv: '', 
    verb: '', 
    adj2: '',
    noun2: '',
  });

  const [player, nextPlayer] = useState(1);

  const onInput = (event) => {

    const newField = {
      ...fieldInput,
    }

    newField[event.target.name]  = event.target.value;
    setFieldInput(newField);
  }

  const onSubmitField= (event) => {
    event.preventDefault();

    props.onCallbackField(fieldInput);

    setFieldInput({
      adj1: '',
      noun1: '', 
      adv: '', 
      verb: '', 
      adj2: '',
      noun2: '',
    });

    nextPlayer(player + 1);
  }

  const isEmpty = (name) => {
    return name === '';
  }

  return (
    <div className="PlayerSubmissionForm" onSubmit={ onSubmitField }>
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form">

        <div className="PlayerSubmissionForm__poem-inputs">
          
          {props.fields.map((field, i) => {
            if (field.key) {
              return (
                <input 
                  key={`${i}`}
                  name={`${field.key}`}
                  placeholder={`${field.placeholder}`} 
                  type="text" 
                  value={fieldInput[`${field.key}`]}
                  onChange={onInput} 
                  className={isEmpty(fieldInput[`${field.key}`]) ? "empty" : "filled"}
                />
              );
            }else{
              return field;
            }
          })}
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn"/>
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  fields: PropTypes.object.isRequired,
  onCallbackField: PropTypes.func.isRequired,
};


export default PlayerSubmissionForm;
