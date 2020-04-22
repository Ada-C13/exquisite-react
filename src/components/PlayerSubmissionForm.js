import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [box, setBox] = useState({ // the form has the following:
    adj1: '',
    noun1: '',
    adv: '',
    verb: '', 
    adj2: '',
    noun2: ''
  });

  const onInputChange = (event) => {
    // dubplicate the form for new user
    const newBoxField = {
      ...box,
    }
    newBoxField[event.target.name] = event.target.value;
    setBox(newBoxField);
  }
 console.log(box);

  const onBoxSubmit = (event) => {
    event.preventDefault();
    console.log("submitting a poem")
    // send submisstion back to Game.js
    props.onSubmitCallBack(box);
  }
 
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form onSubmit={onBoxSubmit} className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <input
            name={props.fields[1].key}
            onChange={onInputChange}
            value = {box.adj1}
            placeholder={props.fields[1].placeholder}
            type="text" />
       
         <input
            name={props.fields[2].key}
            onChange={onInputChange}
            value = {box.noun1}
            placeholder={props.fields[2].placeholder}
            type="text" />


         <input
            name={props.fields[3].key}
            onChange={onInputChange}
            value = {box.adv}
            placeholder={props.fields[3].placeholder}
            type="text" />
   
         <input
            name={props.fields[4].key}
            onChange={onInputChange}
            value = {box.verb}
            placeholder={props.fields[4].placeholder}
            type="text" />

            
         <input
            name={props.fields[6].key}
            onChange={onInputChange}
            value = {box.adj2}
            placeholder={props.fields[6].placeholder}
            type="text" />
         <input
            name={props.fields[7].key}
            onChange={onInputChange}
            value = {box.noun2}
            placeholder={props.fields[7].placeholder}
            type="text" />


        </div>

        <div className="PlayerSubmissionForm__submit">
          <input onClick={props.onSubmitCallBack} type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
