import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [poemPiece, setPoemPiece] = useState({
    adj1:'',
    noun1:'',
    adv:'',
    verb:'',
    adj2:'',
    noun2:''
  });

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
    if ( poemPiece.adj1 !== '' && 
        poemPiece.noun1 !== '' && 
        poemPiece.adv !== '' && 
        poemPiece.verb !== '' && 
        poemPiece.adj2 !== '' &&
        poemPiece.noun2 !== '' )
      {
       // send that data back up to app. 
       props.onFormSubmitCallback(poemPiece)
       // Clear the form afert to submit the data back to the game.
       setPoemPiece({
        adj1 :'',
        noun1 :'', 
        adv :'', 
        verb :'', 
        adj2 :'',
        noun2 :'',
       });
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
      <h3>Player Submission Form for Player #{  }</h3>

      <form 
        onSubmit={onFormSubmit}
        className="PlayerSubmissionForm__form" > 
        <div className="PlayerSubmissionForm__poem-inputs">
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
