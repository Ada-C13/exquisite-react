import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from "prop-types";

const PlayerSubmissionForm = (props) => {
  const [count, setCount] = useState(1)
  const [formFields, setFormFields] = useState({
    firstAdjective: '',
    firstNoun: '',
    adverb: '',
    verb: '',
    secondAdjective: '',
    secondNoun: '',
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields
    }
    

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const isValid = (name) => {
    if (formFields[name].match(/[a-zA-Z]+ |[^\W-9+)]/)) {
      return true
    } else {
      return false
    }
  }

  const onFormSubmit = (event) => {
    setCount(count + 1)
    event.preventDefault();

    props.addPoemCallback(formFields);

    setFormFields({
      firstAdjective: '',
      firstNoun: '',
      adverb: '',
      verb: '',
      secondAdjective: '',
      secondNoun: '',
    });
  };
  return (
    <div className="PlayerSubmissionForm" >
      <h3>Player Submission Form for Player #{count}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input
           name="firstAdjective"
           onChange={onInputChange}
           value={formFields.firstAdjective}
           placeholder="adjective"
           type="text"
           className= {isValid("firstAdjective")? "PlayerSubmissionFormt__input--valid" : "PlayerSubmissionFormt__input--invalid"}
          />

          <input
           name="firstNoun"
           onChange={onInputChange}
           value={formFields.firstNoun}
           placeholder="noun"
           type="text"
           className= {isValid("firstNoun")? "PlayerSubmissionFormt__input--valid" : "PlayerSubmissionFormt__input--invalid"}
          />

          <input
           name="adverb"
           onChange={onInputChange}
           value={formFields.adverb}
           placeholder="adverb"
           type="text"
           className= {isValid("adverb")? "PlayerSubmissionFormt__input--valid" : "PlayerSubmissionFormt__input--invalid"}
          />

          <input
           name="verb"
           onChange={onInputChange}
           value={formFields.verb}
           placeholder="verb"
           type="text"
           className= {isValid("verb")? "PlayerSubmissionFormt__input--valid" : "PlayerSubmissionFormt__input--invalid"}
          />

          the
          <input
           name="secondAdjective"
           onChange={onInputChange}
           value={formFields.secondAdjective}
           placeholder="adjective"
           type="text"
           className= {isValid("secondAdjective")? "PlayerSubmissionFormt__input--valid" : "PlayerSubmissionFormt__input--invalid"}
          />

          <input
           name="secondNoun"
           onChange={onInputChange}
           value={formFields.secondNoun}
           placeholder="noun"
           type="text"
           className= {isValid("secondNoun")? "PlayerSubmissionFormt__input--valid" : "PlayerSubmissionFormt__input--invalid"}
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
  addPoemCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
