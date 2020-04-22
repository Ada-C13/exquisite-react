import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const poemPieces = []

  const [poemPiece, setPoemPiece] = useState(poemPieces);

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");



  const addPoemPiece= (poem)=> {
    const newPoemPiece = [...poemPieces];

    console.log(poem)

    newPoemPiece.push({
      ...poem,
      adj1: poem.adj1,
      noun1: poem.noun1,
      adv: poem.adv,
      verb: poem.verb,
      adj2: poem.adj2,
      noun2: poem.noun2,
    });

    // const format = exampleFormat(newPoemPiece)
    // console.log(format)

    setPoemPiece(newPoemPiece);
  }

  // console.log(poemPieces);

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission poems={poemPiece}/>

      <PlayerSubmissionForm onFormSubmitCallback={addPoemPiece} fields={FIELDS} />

      <FinalPoem />

    </div>
  );
}


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

export default Game;
