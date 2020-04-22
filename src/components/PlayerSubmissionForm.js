import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [formFields, setFormFields] = useState({
    firstAdjective: '',
    firstNoun: '',
    adverb: '',
    verb: '',
    secondAdjective: '',
    secondNoun: '',
    id: 1
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields
    }

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addPoemCallback(formFields);

    setFormFields({
      firstAdjective: '',
      firstNoun: '',
      adverb: '',
      verb: '',
      secondAdjective: '',
      secondNoun: '',
      id: 1,
    });
  };
  return (
    <div className="PlayerSubmissionForm" >
      <h3>Player Submission Form for Player #{formFields.id}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input
           name="firstAdjective"
           onChange={onInputChange}
           value={formFields.firstAdjective}
           placeholder="adjective"
           type="text"
          />

          <input
           name="firstNoun"
           onChange={onInputChange}
           value={formFields.firstNoun}
           placeholder="noun"
           type="text"
          />

          <input
           name="adverb"
           onChange={onInputChange}
           value={formFields.adverb}
           placeholder="adverb"
           type="text"
          />

          <input
           name="verb"
           onChange={onInputChange}
           value={formFields.verb}
           placeholder="verb"
           type="text"
          />

          the
          <input
           name="secondAdjective"
           onChange={onInputChange}
           value={formFields.secondAdjective}
           placeholder="adjective"
           type="text"
          />

          <input
           name="secondNoun"
           onChange={onInputChange}
           value={formFields.secondNoun}
           placeholder="noun"
           type="text"
          />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
