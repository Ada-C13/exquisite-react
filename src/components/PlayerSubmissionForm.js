import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  const [formFields, setFormFields] = useState(
    {
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: ""
    }
  )
  const [player, setPlayer] = useState(1);

  const onInputChange = (e) => {
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);

    const newFormFields = {
      ...formFields,
    }
    
    newFormFields[e.target.name] = e.target.value;
    setFormFields(newFormFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
    console.log(formFields);
    
    // increments count of player
    setPlayer(player + 1);
    
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
      <h3>Player Submission Form for Player #{player}</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          <p>The</p>

          <input
            placeholder="adjective"
            type="text"
            // why value not showing updated field when typing?
            // value={formFields.adj1} 
            onChange={onInputChange}
          />

          <input
            placeholder="noun"
            type="text"
            // value={formFields.noun1} 
            onChange={onInputChange}
          />

          <input
            placeholder="adverb"
            type="text"
            // value={formFields.adv} 
            onChange={onInputChange}
          />

          <input
            placeholder="verb"
            type="text"
            // value={formFields.verb} 
            onChange={onInputChange}
          />

          <p>the</p>
          <input
            placeholder="adjective"
            type="text"
            // value={formFields.adj2} 
            onChange={onInputChange}
          />

          <input
            placeholder="noun"
            type="text"
            // value={formFields.noun2} 
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


export default PlayerSubmissionForm;
