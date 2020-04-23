import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

const PlayerSubmissionForm = (props) => {
  //create a useState hook for the input changes 
  const [poem, setPoem] = useState({
    adjective1: "",
    noun1: "",
    adverb: "",
    verb: "",
    adjective2: "",
    noun2: ""
  })
  
  const [currentPlayer, setPlayer] = useState(1)
  //create an event handler function for the onChange event listener 
  const onInputChange = (event) =>{
    const newPoem = {
      ...poem
    }
    newPoem[event.target.name] = [event.target.value.toLowerCase()]
    setPoem(newPoem)
  }
  //create an event handler function for onSubmit event listener 
  const onSubmitForm = (event) =>{
    if (isEmpty()) return // to prevent the user if they miss filling out any field
    event.preventDefault();
    console.log("creating a poem");
    console.log(poem);
    
    //send call back function to RecentSubmission 
    props.onSubmitCallback(poem)
      setPoem({
        adjective1:"",
        noun1:"",
        adverb:"",
        verb:"",
        adjective2:"",
        noun2:""})
      setPlayer(currentPlayer + 1)
    }

  // Field validation
  const inputs = {
    adjective1:{
      validation: /.+/,
      message: "Field must have 1 or more letters"
    },
    noun1:{
      validation: /.+/,
      message: "Field must have 1 or more letters"
    },
    adverb: {
      validation: /.+/,
      message: "Field must have 1 or more letters"
    },
    verb: {
      validation: /.+/,
      message: "Field must have 1 or more letters"
    },
    adjective2: {
      validation: /.+/,
      message: "Field must have 1 or more letters"
    },
    noun2: {
      validation: /.+/,
      message: "Field must have 1 or more letters"
    }
  }
  //Validate function
  const fieldValid = (fieldName) =>{
    return inputs[fieldName].validation.test(poem[fieldName])
  }
  const isEmpty = () =>{
    return(
      poem.adjective1 === "" ||
      poem.noun1 === "" ||
      poem.adverb === "" ||
      poem.verb === "" ||
      poem.adjective2 === ""||
      poem.noun2 === "" 
    )
  }
  return (
    <div
      onSubmit = {onSubmitForm} 
      className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ currentPlayer }</h3>
      <form className="PlayerSubmissionForm__form" >
        <div className="PlayerSubmissionForm__poem-inputs">
          <p>The</p>
          <input
            placeholder="adjective"
            type="text"
            name = "adjective1"
            value = {poem.adjective1}
            onChange = {onInputChange}
            className = {fieldValid("adjective1")? 'PlayerSubmissionFormt__input--valid':'PlayerSubmissionFormt__input--invalid'}
          />
          <input
            placeholder="noun"
            type="text" 
            name = "noun1"
            value = {poem.noun1}
            onChange = {onInputChange}
            className = {fieldValid("noun1")? 'PlayerSubmissionFormt__input--valid':'PlayerSubmissionFormt__input--invalid'}
          />
          <input
            placeholder="adverb"
            type="text"
            name = "adverb"
            value = {poem.adverb}
            onChange = {onInputChange}
            className = {fieldValid("adverb")? 'PlayerSubmissionFormt__input--valid':'PlayerSubmissionFormt__input--invalid'}
          />
          <input
            placeholder="verb"
            type="text" 
            name = "verb"
            value = {poem.verb}
            onChange = {onInputChange}
            className = {fieldValid("verb")?  'PlayerSubmissionFormt__input--valid':'PlayerSubmissionFormt__input--invalid'}
          />
          <p>the</p>
          <input
            placeholder="adjective"
            type="text"
            name = "adjective2"
            value = {poem.adjective2}
            onChange = {onInputChange}
            className = {fieldValid("adjective2")? 'PlayerSubmissionFormt__input--valid':'PlayerSubmissionFormt__input--invalid'}
          />
          <input
            placeholder="noun"
            type="text" 
            name = "noun2"
            value = {poem.noun2}
            onChange = {onInputChange}
            className = {fieldValid("noun2")? 'PlayerSubmissionFormt__input--valid':'PlayerSubmissionFormt__input--invalid'}
          />
          <p> .</p>
        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.proptype = {
  onSubmitCallback: PropTypes.func,
}

export default PlayerSubmissionForm;
