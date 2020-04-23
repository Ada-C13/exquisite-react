import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';
import poemFormat from './data/fields.json';

const FIELDS = poemFormat;

//Establish the format of user data that gets stored
//We are only tracking poem fields that take user input
const submissionTemplate = () => {
  const submissionKeys = {};
  for (let field of FIELDS) {
    if (field.key) submissionKeys[field.key] = "";
  }
  return submissionKeys;
}

const Game = () => {
  const [playerSubmission, setPlayerSubmission] = useState(submissionTemplate());
  const [poem, setPoem] = useState([]);
  const [isRevealed, setIsRevealed] = useState(false);

  //pretty-print the format of a poem sentence
  const exampleFormat = FIELDS.map((field) => {
    return field.key ? field.placeholder : field
  }).join(" ");

  //callback function to handle changes on text input fields
  const handleChange = (event) => {
    let updatedFields = {...playerSubmission};
    updatedFields[event.target.id] = event.target.value;
    setPlayerSubmission(updatedFields);
  }

  //callback function to store user's submitted poem sentence
  const handleSubmit = (event) => {
    event.preventDefault();
    
    //returns the user's inputs in string format
    const submittedLine = () => {
      let submissionString = "";
      for (let field of FIELDS) {
        field.key ? submissionString += ` ${(playerSubmission[field.key])}` : submissionString += ` ${field}`;
      }
      return submissionString.trim();
    };

    let updatedPoem = [...poem]; 
    updatedPoem.push(submittedLine());
    setPoem(updatedPoem);
    setPlayerSubmission(submissionTemplate());
  }

  const handleReveal = (event) => {
    setIsRevealed(true);
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {poem.length > 0 && !isRevealed ? <RecentSubmission line={poem[poem.length-1]}/> : null }
      { isRevealed ? null : <PlayerSubmissionForm fields={FIELDS} current={playerSubmission} count={poem.length+1} onChangeCallback={handleChange} onSubmitCallback={handleSubmit}/> }
      <FinalPoem status={isRevealed} poem={poem} onButtonClickCallback={handleReveal} />  

    </div>
  );
}


export default Game;
