import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];


const submissionFormat = () => {
  const submissionKeys = {};
  for (let field of FIELDS) {
    if (field.key) submissionKeys[field.key] = "";
  }
  console.log(JSON.stringify(submissionKeys))
  return submissionKeys;
}

const Game = () => {
  const [playerSubmission, setPlayerSubmission] = useState(submissionFormat());
  const [poem, setPoem] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const exampleFormat = FIELDS.map((field) => {
    return field.key ? field.placeholder : field
  }).join(" ");

  const handleChange = (event) => {
    let updatedFields = {...playerSubmission};
    updatedFields[event.target.id] = event.target.value;
    console.log(`Saving ${event.target.id} value ${event.target.value}:: ${updatedFields[event.target.id]}`)
    setPlayerSubmission(updatedFields);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const submissionToString = () => {
      let submissionString = "";
      for (let field of FIELDS) {
        field.key ? submissionString += ` ${(playerSubmission[field.key])}` : submissionString += ` ${field}`;
      }
      return submissionString.trim();
    };
    let updatedPoem = [...poem]; 
    updatedPoem.push(submissionToString());
    setPoem(updatedPoem);
  }

  const handleReveal = (event) => {
    console.log("done!");
    setSubmitted(true);
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {poem.length > 0 ? <RecentSubmission line={poem[poem.length-1].trim()}/> : null }

      <PlayerSubmissionForm fields={FIELDS} onChangeCallback={handleChange} onSubmitCallback={handleSubmit}/>

      <FinalPoem status={submitted} poem={poem} onButtonClickCallback={handleReveal} />

    </div>
  );
}



export default Game;
