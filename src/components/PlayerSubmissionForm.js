import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState(
    {
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    }
  );

  const onInputChange = (e) => {

    const newFormFields = {
      ...formFields,
    };

    //validate for styles, not empty here
    
    newFormFields[e.target.name] = e.target.value;
    setFormFields(newFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("form FIELDS", formFields);

    //send data back up to Game if all is well
    props.onSubmitCallback(formFields);
    
    // clears all fields for next player's input
    setFormFields({
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={handleSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">
          <p>The</p>

          <input
            name="adj1"
            placeholder="adjective"
            type="text"
            value={formFields.adj1} 
            onChange={onInputChange}
          />

          <input
            name="noun1"
            placeholder="noun"
            type="text"
            value={formFields.noun1} 
            onChange={onInputChange}
          />

          <input
            name="adv"
            placeholder="adverb"
            type="text"
            value={formFields.adv} 
            onChange={onInputChange}
          />

          <input
            name="verb"
            placeholder="verb"
            type="text"
            value={formFields.verb} 
            onChange={onInputChange}
          />

          <p>the</p>

          <input
            name="adj2"
            placeholder="adjective"
            type="text"
            value={formFields.adj2} 
            onChange={onInputChange}
          />

          <input
            name="noun2"
            placeholder="noun"
            type="text"
            value={formFields.noun2} 
            onChange={onInputChange}
          />

          <p>.</p>
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input
            type="submit"
            value="Submit Line"
            className="PlayerSubmissionForm__submit-btn"
            // why onClick instead of onSubmit if type of input is submit?
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}


PlayerSubmissionForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
