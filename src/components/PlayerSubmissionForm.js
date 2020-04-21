import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({ playerNum, 
                                formFields, 
                                showForm, 
                                onChangeHandler, 
                                onSubmitForm }) => {
  
  return showForm ? (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{playerNum}</h3>

      <form className="PlayerSubmissionForm__form" >

        {/* <div className="PlayerSubmissionForm__poem-inputs">

          {
            <SubmissionFields />
          }

        </div> */}

        <div className="PlayerSubmissionForm__poem-inputs">

          The 
          <input 
            className={formFields.adj1 === '' ?"PlayerSubmissionFormt__input--invalid" : null}
            name="adj1" 
            placeholder="adjective" 
            type="text" 
            onChange={onChangeHandler}/>
          <input
            className={formFields.noun1 === '' ?"PlayerSubmissionFormt__input--invalid" : null} 
            name="noun1" 
            placeholder="noun" 
            type="text" 
            onChange={onChangeHandler}/>
          <input 
            className={formFields.adv === '' ?"PlayerSubmissionFormt__input--invalid" : null}
            name="adv" 
            placeholder="adverb" 
            type="text" 
            onChange={onChangeHandler}/>
          <input 
            className={formFields.verb === '' ?"PlayerSubmissionFormt__input--invalid" : null}
            name="verb" 
            placeholder="verb" 
            type="text" 
            onChange={onChangeHandler}/>
          the 
          <input 
            className={formFields.adj2 === '' ?"PlayerSubmissionFormt__input--invalid" : null}
            name="adj2" 
            placeholder="adjective"
            type="text" 
            onChange={onChangeHandler}/>
          <input 
            className={formFields.noun2 === '' ?"PlayerSubmissionFormt__input--invalid" : null}
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
  ) : null;
}


export default PlayerSubmissionForm;
