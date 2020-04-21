import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({ onChangeHandler, onSubmitForm }) => {

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        {/* <div className="PlayerSubmissionForm__poem-inputs">

          {
            <SubmissionFields />
          }

        </div> */}

        <div className="PlayerSubmissionForm__poem-inputs">

          The 
          <input 
            name="adj1" 
            placeholder="adjective" 
            type="text" 
            onChange={onChangeHandler}/>
          <input 
            name="noun1" 
            placeholder="noun" 
            type="text" 
            onChange={onChangeHandler}/>
          <input 
            name="adv" 
            placeholder="adverb" 
            type="text" 
            onChange={onChangeHandler}/>
          <input 
            name="verb" 
            placeholder="verb" 
            type="text" 
            onChange={onChangeHandler}/>
          the 
          <input 
            name="adj2" 
            placeholder="adjective"
            type="text" 
            onChange={onChangeHandler}/>
          <input 
            name="noun2" 
            placeholder="noun" 
            type="text" 
            onChange={onChangeHandler}/>
          .
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input 
            type="submit" 
            value="Submit Line"
            onClick={onSubmitForm}
            className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
