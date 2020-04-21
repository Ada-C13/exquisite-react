import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [player, setPlayer] = useState(1);
  const [linesSubmitted, setlinesSubmitted] = useState([]);  //array of objects
  const [revealStatus, setRevealStatus] = useState(false);
  

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const submitLine = (newLine) => {
    //push to an array of lines
    const allLines = [...linesSubmitted];
    allLines.push(newLine);
    setlinesSubmitted(allLines);

    console.log('submitted line');
    console.log(linesSubmitted);
    //setState
    // setlinesSubmitted(linesSubmitted + 1);
    setPlayer(player + 1);
    // console.log(linesSubmitted);
  };

  const revealPoem = () => {
    //do something on the game level, probably change state of isRevealed
    setRevealStatus(true);

  };

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {!revealStatus && <RecentSubmission />}

      {!revealStatus && <PlayerSubmissionForm onSubmitFormCallback={submitLine} player={player} />}

      <FinalPoem poem={linesSubmitted} onRevealCallback={revealPoem} revealStatus={revealStatus} />

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
