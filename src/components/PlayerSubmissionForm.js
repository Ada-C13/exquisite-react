import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {
  const [fields, setFields] /* destructuring array - first element is fields, second element is setFields */ = useState(
    { 
      adj1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adj2: "",
      noun2: ""
  });

  const onInputChange = event => {
    const { name, value } = event.target;

      const newFields = {
        ...fields,
        [name]: value // [name] get value of name and use it as the key | value is the variable above
        // line 46 is equivalent to: newFields[name] = value
      };
  
    setFields(newFields);
  };


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          The
          <input
            name="adj1"
            onChange={onInputChange}
            value={fields.adj1}
            placeholder="adjective"
            type="text" 
          />
          
          <input
            name="noun1"
            onChange={onInputChange}
            value={fields.noun1}
            placeholder="noun"
            type="text" 
          />
          
          <input
            name="adverb"
            onChange={onInputChange}
            value={fields.adverb}
            placeholder="adverb"
            type="text" 
          />

          <input
            name="verb"
            onChange={onInputChange}
            value={fields.verb}
            placeholder="verb"
            type="text" 
          /> 
          the 
          <input
            name="adj2"
            onChange={onInputChange}
            value={fields.adj2}
            placeholder="adjective"
            type="text" 
          />

          <input
            name="noun2"
            onChange={onInputChange}
            value={fields.noun2}
            placeholder="noun"
            type="noun" 
          />.

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

// User Stories
// TODO As a player, I want to be able to fill out the six text input fields that mimic the poetry format and press a submit button, so that I fill out the line of poetry.
// *DONE* As a player, I want to be able to see placeholder text in each text input that describes what kind of word I should fill in.
// TODO As a player, I want the Game component to have the data of my submission, so that the Game component keeps track of all of the submissions.
// TODO As a player who is going after the first player, I want to be able to have a cleared, reset form with no text in the input elements after the first player submitted, so that I can enter in my own submission easily.
// TODO As the third player, I want to see that the header for the submission form is "Player Submission Form for Player #3", so that I know that I am the third player.
// Hints
// Don't be shy about making all of the pieces of props or state that you've determined you need!


export default PlayerSubmissionForm;
