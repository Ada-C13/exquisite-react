import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const CLEARINPUTS = {
  adj1:'',
  noun1:'',
  adv:'',
  verb:'',
  adj2:'',
  noun2:''
};

const PlayerSubmissionForm = (props) => {

  // State to handle the pieces of poems.
  // CLEARINPUTS = use constant to set the input to empty strings.
  const [poemPiece, setPoemPiece] = useState(CLEARINPUTS);

  const onChange =(event) => {
    const newPoem = {
      ...poemPiece
    }

    console.log(newPoem);
    newPoem[event.target.name] = event.target.value;
    setPoemPiece(newPoem);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("submitting form")
    if (poemPiece.adj1 !== '' && 
        poemPiece.noun1 !== '' && 
        poemPiece.adv !== '' && 
        poemPiece.verb !== '' && 
        poemPiece.adj2 !== '' &&
        poemPiece.noun2 !== '' )
    {
      // send that data back up to app. 
      props.onFormSubmitCallback(poemPiece)
      // reseting form with no text in the input elements after the first player submitted
      setPoemPiece(CLEARINPUTS);
    }
  };

  // Getting the fields from the parent (Game) Props.field object.
  const generateFormComponents = props.fields.map((field, i) => {
    // Initialize the place holder value to empty string. 
    const valueHolder = poemPiece[field.key];
      if (field.key){
        return (
          <input 
            key={i} 
            name={field.key} 
            // able to see placeholder text in each text input. 
            placeholder= {field.placeholder} 
            value={valueHolder}
            onChange={onChange}
            // className={isEmpty(sentence[`${field.key}`]) ? "empty" : "filled"}
          />
        );
      } else {
        return field;
      }
  });
  return (
    <div className="PlayerSubmissionForm">
      {/* Displaying the number of the current player. props.currentPlayer from Game.js */}
      <h3>Player Submission Form for Player #{props.currentPlayer}</h3>

      <form 
        // Invoking onFormSubmit function. When the player submit the piece of their poem. 
        onSubmit={onFormSubmit}
        className="PlayerSubmissionForm__form" > 
        <div className="PlayerSubmissionForm__poem-inputs">
          {/* Invoking the function to generate dynamicly the Input form. */}
         {generateFormComponents}
        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
