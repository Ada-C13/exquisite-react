import React, { useState } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

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
  console.log(props);
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
      // Format the poem once the submit event happens. 
      // One line compact everything before to send it to game Component. 
      const formatPoem = [
        "The",
          poemPiece.adj1,
          poemPiece.noun1,
          poemPiece.adv,
          poemPiece.verb,
          "the",
          poemPiece.adj2,
          poemPiece.noun2,
          "."
      ].join(" ")

      console.log(formatPoem)
      // send that data back up to app.
      props.onFormSubmitCallback(formatPoem)
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
            // Form text inputs to be light pink when they are empty. 
            // A visual way of seeing that it's invalid when it's blank.
            className={valueHolder === "" ? "empty" : "filled"}
          />
        );
      } else {
        return field;
      }
  });
  
  //  {/* Displaying the number of the current player. props.currentPlayer from Game.js */}
  return (
    <div className="PlayerSubmissionForm">
      {/* Hide the Player Submission Form after the final poem has been revealed. */}
      { 
        props.playing &&
        (
        <div className="submition-encapsulation">
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
        )
      }
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  currentPlayer: PropTypes.number.isRequired,
  fields: PropTypes.array.isRequired,
  onFormSubmitCallback: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};


export default PlayerSubmissionForm;
