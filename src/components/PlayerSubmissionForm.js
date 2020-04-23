import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  //set state for current player number
  const[currentPlayer, setCurrentPlayer] = useState(1);
  // set state for the form input
  const[formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  const fieldComponents = () => {
    return (
      props.fields.map(field => {
        if (typeof field === 'string') {
          return (
            <div>{field}</div>
          )
        } else {
          return (
            <input
              key={field.key}
              placeholder={field.placeholder}
              name={field.key}
              value={formFields[field.key]}
              type="text" 
              onChange={onInputChange}
            />
            )
        }
      })
    )
  }


  const onInputChange = (event) => {
    console.log(event.target);
    const newFormField = {
      ...formFields
    }

    newFormField[event.target.name] = event.target.value;
    setFormFields(newFormField);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    let sentence_array = [];
    props.fields.forEach(field => {
      if (typeof field === 'string') {
        sentence_array.push(field);
      } else {
        sentence_array.push(formFields[field.key]);
      }
    });

    // Put all the words together in a sentence.
    let sentence = sentence_array.join(' ')
    props.onSubmitCallback(sentence);

    // reset state of the form
    setFormFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    })

    //reset Player
    console.log(currentPlayer)
    setCurrentPlayer(currentPlayer + 1);
  } 

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{currentPlayer}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit} >
        <div className="PlayerSubmissionForm__poem-inputs">
          {fieldComponents()}
        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
