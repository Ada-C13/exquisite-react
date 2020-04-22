import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = ({onSubmitCallBack, currentPlayerId}) => {

  const [formFields, setFormFields ] = useState({
    the1: "The",
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    the2: 'the',
    adj2: '',
    noun2: ''
  });

  const inputs = {
    adj1: {
      validation: /.+/,
    },
    noun1: {
      validation: /.+/,
    },
    adv: {
      validation: /.+/,
    },
    verb: {
      validation: /.+/,
    },
    adj2: {
      validation: /.+/,
    },
    noun2: {
      validation: /.+/,
    }
  };

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    };

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const fieldValid = fieldName => {
    return inputs[fieldName].validation.test(formFields[fieldName]);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    const formFieldsArray = Object.values(formFields);

    if (!formFieldsArray.includes('')) {

      onSubmitCallBack(formFields);

      setFormFields({
        the1: "The",
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        the2: 'the',
        adj2: '',
        noun2: ''
      });
    }

  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{currentPlayerId}</h3>

      <form 
        className="PlayerSubmissionForm__form" 
        onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input
            name="adj1"
            placeholder="adjective"
            type="text"
            onChange={onInputChange}
            className={fieldValid("adj1") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.adj1}
            />
          <input
            name="noun1"
            placeholder="noun"
            type="text"
            onChange={onInputChange}
            className={fieldValid("noun1") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.noun1}
            />
          <input
            name="adv"
            placeholder="adverb"
            type="text"
            onChange={onInputChange}
            className={fieldValid("adv") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.adv}
            />
          <input
            name="verb"
            placeholder="verb"
            type="text" 
            onChange={onInputChange}
            className={fieldValid("verb") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.verb}
            />
          the
          <input
            name="adj2"
            placeholder="adjective"
            type="text"
            onChange={onInputChange}
            className={fieldValid("adj2") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.adj2}
            />
          <input
            name="noun2"
            placeholder="noun"
            type="text" 
            onChange={onInputChange}
            className={fieldValid("noun2") ? "" : "PlayerSubmissionFormt__input--invalid"}
            value={formFields.noun2}
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
  onSubmitCallBack: PropTypes.func.isRequired
};

export default PlayerSubmissionForm;