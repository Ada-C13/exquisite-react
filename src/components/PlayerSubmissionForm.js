import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types'; 

const PlayerSubmissionForm = (props) => {
   
  const [form, setFormTemplate] = useState(
    {
      adjOne: "",
      nounOne: "",
      advOne: "",
      verbOne: "",
      adjTwo: "",
      nounTwo: ""
    }
  );

  const [poet, setPoet] = useState(1)

  const poetCount = () => {
    setPoet (poet++);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    console.log("Your poem has been submitted.")
    //...
  };

  //Things this file needs to do:
  //Send a poem submission into a data collection in Game.js 
  //Reset the state of the form fields so they're back to placeholder values after onClickSubmit. 
  //









  const render = () => {
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{/*poetCount()*/} :</h3>
      <form className="PlayerSubmissionForm__form" >
        <div className="PlayerSubmissionForm__poem-inputs">
            <input 
            name="adjOne"
            placeholder="Adjective"
            type="text"
            />

            <input
              name="nounOne"
              placeholder="Noun"
              type="text"
            />

            <input
              name="advOne"
              placeholder="Adverb"
              type="text"
            />

            <input
              name="verbOne"
              placeholder="Verb"
              type="text"
            />

            <input
              name="adjTwo"
              placeholder="Adjective"
              type="text"
            />

            <input
              name="nounTwo"
              placeholder="Noun"
              type="text"
            />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
          type="submit" 
          value="Submit Line" 
          className="PlayerSubmissionForm__submit-btn" />
        </div>

      </form>
    </div>
  );
  }
}



export default PlayerSubmissionForm;
