import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const [poem, setPoem] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [inProgress, setInProgress] = useState("yes");

  const addPoemLine = (poemLine) => {
    const updatedPoem = [...poem];
    updatedPoem.push(poemLine);
    setPoem(updatedPoem);
    setCurrentPlayer(currentPlayer + 1);
  };

  const generatePoem = poem.map((line) => {
    return "The " + line.adj1 + " " + line.noun1 + " " + line.adv + " " + line.verb + " the " + line.adj2 + " " + line.noun2 + "."
  });

  const displayFinalPoem = () => {
    setInProgress("no");
  }

  let gameInProgress = (
    <div>
      <RecentSubmission
  
      />

      <PlayerSubmissionForm 
      onSubmitCallback={addPoemLine}
      currentPlayer={currentPlayer}
      />
    </div>
  )

  if (inProgress === "no") {
    gameInProgress = null;
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {gameInProgress}

      <FinalPoem 
        poem={generatePoem}
        onClickCallback={displayFinalPoem}
      />

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
